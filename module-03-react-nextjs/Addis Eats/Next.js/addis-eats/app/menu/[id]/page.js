import { notFound } from "next/navigation";
import { dishes } from "@/data/dishes";

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>
      <p>Dish ID: {dish.id}</p>
    </main>
  );
}