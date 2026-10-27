"use client";

import { useEffect, useState } from "react";
import { relative, when } from "@/lib/format";

function timeAgo(date) {
  if (!date) return "Time unavailable";

  const seconds = Math.round((new Date(date).getTime() - Date.now()) / 1000);
  const units = [
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size || unit === "second") {
      return relative.format(Math.round(seconds / size), unit);
    }
  }
}

export default function TrackingStatus({ orderId, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const [connection, setConnection] = useState("Connecting…");

  useEffect(() => {
    const source = new EventSource(`/api/orders/${encodeURIComponent(orderId)}/stream`);

    source.onopen = () => setConnection("Live updates connected");
    source.onmessage = (event) => {
      try {
        setStatus(JSON.parse(event.data));
        setConnection("Live updates connected");
      } catch {
        setConnection("Received an invalid status update");
      }
    };
    source.onerror = () => setConnection("Reconnecting to live updates…");

    return () => source.close();
  }, [orderId]);

  return (
    <section className="space-y-2 rounded-xl border p-5" aria-live="polite">
      <h2 className="text-xl font-semibold">Delivery status</h2>
      <p className="text-lg capitalize">
        Current status: <strong>{status.status || "Unknown"}</strong>
      </p>
      <p>{connection}</p>
      <p className="text-sm text-gray-600">
        Last order update: {status.createdAt ? when.format(new Date(status.createdAt)) : "Unknown"}
        {" "}({timeAgo(status.createdAt)})
      </p>
    </section>
  );
}
