export default async function DishPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Dish Details</h1>
      <p>Dish ID: {id}</p>
    </main>
  );
}