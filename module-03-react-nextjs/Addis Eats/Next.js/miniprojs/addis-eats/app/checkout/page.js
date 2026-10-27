import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import CheckoutForm from "./CheckoutForm";

export default async function CheckoutPage() {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in?next=/checkout");
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>
      <CheckoutForm />
    </main>
  );
}