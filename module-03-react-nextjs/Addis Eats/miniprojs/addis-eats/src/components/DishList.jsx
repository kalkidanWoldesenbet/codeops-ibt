import Dish from "./Dish"

function DishList({dishes, onAdd}) {
    if (dishes.length === 0){
        return <p>no Dishes found on this category yet.</p>
    }

  return (
    <div className="card-container">
      {dishes.map((item) =>(
        <Dish
          key={item.id}
          {...item}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}

export default DishList
