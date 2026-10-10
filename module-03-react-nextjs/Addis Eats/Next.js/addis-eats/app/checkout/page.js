import { cookies } from "next/headers";

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const customerName = cookieStore.get("customerName")?.value;
  return (
    <main>
      <h1>Checkout</h1>
      {customerName ? (
        <p>Welcome back, {customerName}!</p>
      ) : (
        <p>Please enter your details to complete your order.</p>
      )}
    </main>
  );
}