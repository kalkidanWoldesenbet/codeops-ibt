import Link from "next/link";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";
import MenuNavigation from "./MenuNavigation";
import { Suspense } from "react";
import { DishListFallback } from "./DishListFallback";

export const revalidate = 60; // Revalidate this page every 60 seconds
export default async function MenuPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      <h1>Menu</h1>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/cart">Cart</Link>
        {" | "}
        <Link href="/checkout">Checkout</Link>
      </nav>

      <CategoryBar />
      <Suspense fallback={<DishListFallback />}>
        <DishList />
      </Suspense>
      <MenuNavigation />
      <Link href="/menu/1">View Doro Wot</Link>

    </main>
  );
}