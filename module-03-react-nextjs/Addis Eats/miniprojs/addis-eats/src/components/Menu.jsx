import { useEffect, useRef, useState } from "react";
import { getDishes } from "../api";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import CategoryBar from "./CategoryBar";

function Menu() {
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("All");
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const data = await getDishes(
          category,
          controller.signal
        );

        setMenu(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [category]);

  function addToOrder(price) {
    setTotal((currentTotal) => currentTotal + price);
  }

  return (
    <div>
      <h2>Addis Eats - Our Menu</h2>

      <h1>Total: {total} ETB</h1>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
      />

      <CategoryBar
        selected={category}
        onSelectCategory={setCategory}
      />

      {loading && <p>Loading menu...</p>}

      {error && (
        <p className="err">
          {error.message}
        </p>
      )}

      {!loading && !error && (
        <DishList
          dishes={menu}
          onAdd={addToOrder}
        />
      )}

      <OrderForm />
    </div>
  );
}

export default Menu;