"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[400px] w-full animate-pulse rounded-xl bg-gray-200"
      role="status"
    >
      Loading delivery map…
    </div>
  ),
});

export default function DeliveryMapLoader({ courier, destination }) {
  return <DeliveryMap courier={courier} destination={destination} />;
}
