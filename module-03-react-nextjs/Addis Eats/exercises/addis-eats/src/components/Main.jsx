import { useState } from "react";
import menu from "../data";
import Dish from "./Dish";
import CategoryBar from "./CategoryBar";
import DeliveryForm from "./DeliveryForm";

const mainCat = menu.filter(
  (item) => item.category === "Main Course"
);

const sideCat = menu.filter(
  (item) => item.category === "Side Dish"
);

const bevCat = menu.filter(
  (item) => item.category === "Beverage"
);

function Main() {
  // Exercise 2 & 3
  const [category, setCategory] = useState("All");

  // Exercise 5
  const [total, setTotal] = useState(0);

  // Exercise 4
  const shown =
    category === "All"
      ? menu
      : category === "Main Course"
        ? mainCat
        : category === "Side Dish"
          ? sideCat
          : bevCat;

  // Exercise 5
  function addToOrder(price) {
    setTotal(total + price);
  }

  // Exercise 4
  if (shown.length === 0) {
    return (
      <div>
        <h2>Addis Eats - Our Menu</h2>

        <CategoryBar
          selected={category}
          onSelectCategory={setCategory}
        />

        <p>No dishes found.</p>

        <h2>Total: {total} ETB</h2>

        <DeliveryForm />
      </div>
    );
  }

  return (
    <div>
      <h2>Addis Eats - Our Menu</h2>

      <CategoryBar
        selected={category}
        onSelectCategory={setCategory}
      />

      <div className="card-container">
        {shown.map((item) => (
          <Dish
            key={item.id}
            {...item}
            onAdd={addToOrder}
          />
        ))}
      </div>

      <h2>Total: {total} ETB</h2>

      <DeliveryForm />
    </div>
  );
}

export default Main;