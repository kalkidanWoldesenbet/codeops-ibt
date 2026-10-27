import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import RevenueChart from "./RevenueChart";
import OrdersOverTimeChart from "./OrdersOverTimeChart";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/sign-in?next=/dashboard");

  const orders = globalThis.orders ?? [];
  const revenue = new Map();
  const dailyOrders = new Map();

  for (const order of orders) {
    const neighbourhood = order.neighbourhood || "Not specified";
    revenue.set(
      neighbourhood,
      (revenue.get(neighbourhood) ?? 0) + order.total
    );

    const date = order.createdAt
      ? new Date(order.createdAt).toISOString().slice(0, 10)
      : "Unknown date";
    dailyOrders.set(date, (dailyOrders.get(date) ?? 0) + 1);
  }

  const revenueData = [...revenue.entries()]
    .map(([neighbourhood, amount]) => ({
      neighbourhood,
      revenue: amount,
    }))
    .sort((a, b) => b.revenue - a.revenue);

  const ordersData = [...dailyOrders.entries()]
    .map(([date, orders]) => ({ date, orders }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
      <h1 className="text-3xl font-bold">Addis Eats Dashboard</h1>
      {orders.length === 0 ? (
        <p>No orders yet. Place an order to populate the dashboard.</p>
      ) : (
        <>
          <RevenueChart data={revenueData} />
          <OrdersOverTimeChart data={ordersData} />
        </>
      )}
    </main>
  );
}
