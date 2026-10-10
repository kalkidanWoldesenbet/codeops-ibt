import { notFound } from "next/navigation";

const dishes = [
  {
    id: "1",
    name: "Doro Wot",
  },
  {
    id: "2",
    name: "Tibs",
  },
  {
    id: "3",
    name: "Shiro",
  },
];

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

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