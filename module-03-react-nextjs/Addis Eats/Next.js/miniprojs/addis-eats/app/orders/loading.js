export default function OrdersLoading() {
  return (
    <main className="mx-auto max-w-5xl space-y-4 px-6 py-10" aria-busy="true">
      <h1 className="text-3xl font-bold">Order History</h1>
      <p className="text-gray-600">Loading your orders...</p>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="h-12 animate-pulse rounded-lg bg-gray-200" />
      ))}
    </main>
  );
}
