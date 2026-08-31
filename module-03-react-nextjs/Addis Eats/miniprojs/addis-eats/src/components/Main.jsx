import { useState } from "react";
import menu from "../data";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

function Main() {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const shown =
    category === "All"
      ? menu
      : menu.filter((item) => item.category === category);

  function addToOrder(price) {
    setTotal(total + price);
  }

  return (
    <div>
      <h2>Addis Eats - Our Menu</h2>

      <CategoryBar
        selected={category}
        onSelectCategory={setCategory}
      />

      <DishList
        dishes={shown}
        onAdd={addToOrder}
      />

      <h2>Total: {total} ETB</h2>

      <OrderForm />
    </div>
  );
}

export default Main;