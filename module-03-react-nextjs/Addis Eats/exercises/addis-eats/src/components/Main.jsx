import { useState, useEffect } from "react";
import Dish from "./Dish";
import CategoryBar from "./CategoryBar";
import DeliveryForm from "./DeliveryForm";




function Main() {
  
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    document.title = `${menu.length} dishes`;
  }, [menu]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/dishes.json");
        if(!res.ok){
          throw new Error("Could not load the menu. Please try again.");
        }

        const contentType = res.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(
            "Could not load the menu. Please try again."
          );
        }

        const data = await res.json();
        
        setMenu(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      
    }

    fetchData();
  },[]);

  if(loading){
    return <p>Loading menu...</p>
  }
  if(error){
    return <p>Error loading menu: {error.message}</p>
  }
  const shown =
    category === "All"
      ? menu
      : menu.filter(
        (item) => item.category === category
      );

  
  function addToOrder(price) {
    setTotal(total + price);
  }

 
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