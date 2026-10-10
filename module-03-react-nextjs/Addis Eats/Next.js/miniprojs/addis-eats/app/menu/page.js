import { Suspense } from "react";
import DishesList from "./DishesList";

function DishesLoading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-1/2 rounded bg-gray-200" />
      <div className="h-32 rounded-xl bg-gray-200" />
      <p className="text-gray-500">Loading dishes...</p>
    </div>
  );
}

export default function MenuPage() {
  return (
    <main>
      <h1 className="mb-3 text-4xl font-bold">Our Menu</h1>
      <p className="mb-8 text-gray-600">
        Discover your favorite Ethiopian dishes.
      </p>

      <Suspense fallback={<DishesLoading />}>
        <DishesList />
      </Suspense>
    </main>
  );
}