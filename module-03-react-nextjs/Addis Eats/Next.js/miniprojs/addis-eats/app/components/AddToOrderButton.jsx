
"use client";

import useCartStore from "@/store/cartStore";

export default function AddToOrderButton({ dish }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      onClick={() => addItem(dish)}
      className="min-h-11 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-700"
      aria-label={`Add ${dish.name} to your order`}
    >
      Add to Order
    </button>
  );
}
