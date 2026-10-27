import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { etb, when } from "@/lib/format";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;
const SORT_FIELDS = ["createdAt", "customerName", "total", "status"];

export default async function OrdersPage({ searchParams }) {
  const session = await getSession();
  if (!session) redirect("/sign-in?next=/orders");

  const params = await searchParams;
  const sort = SORT_FIELDS.includes(params.sort) ? params.sort : "createdAt";
  const dir = params.dir === "asc" ? "asc" : "desc";
  const requestedPage = Math.max(1, Number.parseInt(params.page || "1", 10) || 1);

  const allOrders = (globalThis.orders ?? []).filter(
    (order) => order.userId === session.userId
  );

  const sortedOrders = [...allOrders].sort((a, b) => {
    const left = a[sort] ?? "";
    const right = b[sort] ?? "";
    const comparison =
      typeof left === "number" && typeof right === "number"
        ? left - right
        : String(left).localeCompare(String(right));
    return dir === "asc" ? comparison : -comparison;
  });

  const totalPages = Math.max(1, Math.ceil(sortedOrders.length / PAGE_SIZE));
  const page = Math.min(requestedPage, totalPages);
  const orders = sortedOrders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function urlFor(next) {
    const query = new URLSearchParams({
      sort: next.sort ?? sort,
      dir: next.dir ?? dir,
      page: String(next.page ?? page),
    });
    return `/orders?${query.toString()}`;
  }

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-bold">Order History</h1>

      {allOrders.length === 0 ? (
        <section className="space-y-3 rounded-xl border bg-white p-6">
          <h2 className="text-xl font-semibold">No orders yet</h2>
          <p>Your order history will appear here after your first order.</p>
          <Link className="inline-block rounded-lg bg-orange-600 px-4 py-2 text-white" href="/menu">
            Browse the menu
          </Link>
        </section>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium">Sort by:</span>
            {SORT_FIELDS.map((field) => (
              <Link
                key={field}
                className="rounded border px-3 py-2 text-sm underline"
                href={urlFor({
                  sort: field,
                  dir: sort === field && dir === "asc" ? "desc" : "asc",
                  page: 1,
                })}
                aria-current={sort === field ? "true" : undefined}
              >
                {field === "createdAt" ? "Date" : field === "customerName" ? "Customer" : field === "total" ? "Total" : "Status"}
                {sort === field ? (dir === "asc" ? " ↑" : " ↓") : ""}
              </Link>
            ))}
          </div>

          <div className="overflow-x-auto rounded-lg border bg-white">
            <table className="w-full border-collapse text-left">
              <caption className="p-3 text-left font-medium">
                Your orders — page {page} of {totalPages}
              </caption>
              <thead className="bg-orange-100">
                <tr>
                  <th scope="col" className="p-3">Order ID</th>
                  <th scope="col" className="p-3">Date</th>
                  <th scope="col" className="p-3">Customer</th>
                  <th scope="col" className="p-3">Status</th>
                  <th scope="col" className="p-3 text-right">Total (ETB)</th>
                  <th scope="col" className="p-3">Tracking</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">
                      {order.createdAt ? new Date(order.createdAt).toLocaleDateString("en-ET") : "—"}
                    </td>
                    <td className="p-3">{order.customerName}</td>
                    <td className="p-3">{order.status}</td>
                    <td className="p-3 text-right tabular-nums">{etb.format(order.total)}</td>
                    <td className="p-3">
                      <Link className="underline" href={`/tracking?id=${encodeURIComponent(order.id)}`}>
                        Track delivery
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav aria-label="Order history pages" className="flex items-center justify-between">
            {page > 1 ? (
              <Link className="rounded border px-4 py-2" href={urlFor({ page: page - 1 })}>Previous</Link>
            ) : <span />}
            <span>Page {page} of {totalPages}</span>
            {page < totalPages ? (
              <Link className="rounded border px-4 py-2" href={urlFor({ page: page + 1 })}>Next</Link>
            ) : <span />}
          </nav>
        </>
      )}
    </main>
  );
}
