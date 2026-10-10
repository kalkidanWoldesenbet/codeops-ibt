export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Checkout</h1>
      <p>Complete your order.</p>
      <p className="mt-3 text-gray-600">
        This page is rendered dynamically on each request.
      </p>
    </main>
  );
}