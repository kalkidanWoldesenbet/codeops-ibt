import Link from "next/link";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";
import MenuNavigation from "./MenuNavigation";

export default function MenuPage() {
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
      <DishList />
      <MenuNavigation />
    </main>
  );
}