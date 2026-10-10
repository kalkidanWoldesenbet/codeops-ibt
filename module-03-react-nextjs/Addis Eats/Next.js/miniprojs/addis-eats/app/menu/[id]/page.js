import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "@/data/dishes";

export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main className="rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-3 text-3xl font-bold">{dish.name}</h1>
      <p className="mb-4">{dish.description}</p>
      <p className="mb-5 font-bold">{dish.price} ETB</p>

      <Link
        href="/menu"
        className="text-orange-700 underline"
      >
        Back to Menu
      </Link>
    </main>
  );
}