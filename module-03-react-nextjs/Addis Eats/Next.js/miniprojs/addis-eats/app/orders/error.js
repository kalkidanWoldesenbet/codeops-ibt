"use client";

export default function OrdersError({ error, reset }) {
  return (
    <main className="mx-auto max-w-4xl space-y-4 px-6 py-10">
      <h1 className="text-3xl font-bold">Unable to load orders</h1>
      <p role="alert">{error.message || "Something went wrong while loading your order history."}</p>
      <button onClick={reset} className="rounded-lg bg-orange-600 px-4 py-2 text-white">
        Try again
      </button>
    </main>
  );
}
