function CategoryBar({selected, onSelectCategory}) {
  const categories = [
    "All",
    "Main Course",
    "Side Dish",
    "Beverage",
  ];
  return (
    <div>
      {categories.map((cat) =>(
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={selected === cat ? "selected" : ""}
        >
            {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar
