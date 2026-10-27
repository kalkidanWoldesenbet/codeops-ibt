import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth/session";
import { etb, when } from "@/lib/format";
import { ordersToCsv } from "@/lib/csv";
import TrackingStatus from "./TrackingStatus";
import CsvExport from "./CsvExport";
import DeliveryMapLoader from "./DeliveryMapLoader";


export default async function TrackingPage({ searchParams }) {
  const session = await getSession();
  if (!session) redirect("/sign-in?next=/tracking");

  const params = await searchParams;
  const orderId = params?.id;

  const orders = (globalThis.orders ?? []).filter(
    (order) => order.userId === session.userId
  );

  if (!orderId && orders.length === 0) {
    return (
      <main className="mx-auto max-w-5xl space-y-4 px-6 py-10">
        <h1 className="text-3xl font-bold">Track your delivery</h1>
        <p>No orders found. Place an order to track a delivery.</p>
        <Link className="underline" href="/menu">Browse the menu</Link>
        <CsvExport csv={ordersToCsv(orders)} />
      </main>
    );
  }

  const order = orderId
    ? orders.find((entry) => entry.id === orderId)
    : [...orders].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )[0];

  if (!order) notFound();

  // Approximate demo coordinates for the selected neighbourhood.
  const locations = {
    Bole: { lat: 8.995, lng: 38.787 },
    Piazza: { lat: 9.035, lng: 38.752 },
    Kazanchis: { lat: 9.012, lng: 38.766 },
    Megenagna: { lat: 9.023, lng: 38.807 },
    Lideta: { lat: 9.012, lng: 38.741 },
  };

  const destination = locations[order.neighbourhood] ?? locations.Bole;
  const courier = {
    lat: destination.lat + 0.006,
    lng: destination.lng - 0.006,
  };

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Track your delivery</h1>
          <p className="mt-2 text-gray-600">Order: {order.id}</p>
        </div>
        <CsvExport csv={ordersToCsv(orders)} />
      </div>

      <TrackingStatus
        orderId={order.id}
        initialStatus={{
          id: order.id,
          status: order.status,
          createdAt: order.createdAt,
          neighbourhood: order.neighbourhood,
        }}
      />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Map and delivery address</h2>
        <DeliveryMapLoader courier={courier} destination={destination} />
        <div className="rounded-xl border p-4">
          <p><strong>Delivery neighbourhood:</strong> {order.neighbourhood || "Not specified"}</p>
          <p><strong>Courier:</strong> Approximate demo location near the delivery area</p>
          <p><strong>Delivery address:</strong> {order.neighbourhood || "Address not specified"}, Addis Ababa, Ethiopia</p>
          <p><strong>Order total:</strong> {etb.format(order.total)}</p>
          <p><strong>Order placed:</strong> {order.createdAt ? when.format(new Date(order.createdAt)) : "Unknown"}</p>
        </div>
      </section>
    </main>
  );
}
