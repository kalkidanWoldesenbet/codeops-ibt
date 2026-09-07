import { Link, useSearchParams } from "react-router-dom";
import { dishes } from "../data";

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredDishes = category
    ? dishes.filter((dish) => dish.category === category)
    : dishes;

  function handleCategoryChange(event) {
    const value = event.target.value;

    if (value === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <label htmlFor="category">Category: </label>

      <select
        id="category"
        value={category || "All"}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Vegan">Vegan</option>
        <option value="Main Course">Main Course</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Beverage">Beverage</option>
      </select>

      {filteredDishes.length === 0 ? (
        <p>No dishes found.</p>
      ) : (
        <div>
          {filteredDishes.map((dish) => (
            <article key={dish.id}>
              <h3>{dish.name}</h3>

              <p>{dish.price} ETB</p>

              <Link to={`/menu/${dish.id}`}>View Details</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;