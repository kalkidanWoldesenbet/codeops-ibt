import { Suspense } from "react";
import LiveDishList from "./LiveDishList";

export const metadata = {
  title: "Ethiopian Food Menu",
  description: "Explore the Addis Eats menu featuring Doro Wot, Tibs, Shiro, and traditional Ethiopian flavors.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Ethiopian Food Menu",
    description:
      "Explore Doro Wot, Tibs, Shiro, and more at Addis Eats.",
    url: "/menu",
  },
};  
export default function MenuPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-3 text-4xl font-bold">Our Menu</h1>
      <p className="mb-8 text-gray-600">
        Discover your favorite Ethiopian dishes.
      </p>

      <Suspense fallback={<p className="text-gray-500">Loading menu...</p>}>
        <LiveDishList />
      </Suspense>
    </main>
  );
}