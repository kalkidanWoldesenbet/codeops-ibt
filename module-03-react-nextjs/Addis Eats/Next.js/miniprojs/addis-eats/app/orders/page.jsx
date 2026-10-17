import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import OrdersClient from "./OrdersClient";

export default async function OrdersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in?next=/orders");
  }

  return <OrdersClient />;
}