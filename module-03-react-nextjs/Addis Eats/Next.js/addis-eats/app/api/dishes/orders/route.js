import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

// Demo data only. Replace with database queries.
const orders = [
  { id: "1", userId: "customer-1", status: "Preparing" },
  { id: "2", userId: "customer-2", status: "Ready" },
];

export async function GET() {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userOrders = orders.filter(
    (order) => order.userId === session.userId
  );

  return NextResponse.json(userOrders);
}