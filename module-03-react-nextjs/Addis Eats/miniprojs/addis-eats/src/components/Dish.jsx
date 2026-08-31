import { useState } from 'react'
import Card from './Card'

function Dish({name, price, currency="ETB", spicy, category, onAdd}) {
  const [count,setCount]= useState(0);

  function handleAdd(){
    setCount(count +1);
    onAdd(Number(price));
  }
  return (
    <div className='dish'>
      <Card>
        <h3>{name} Quantity: {count}</h3>
        <p>{price} {currency}</p>
        <p>{category}</p>
        <p>{spicy && <em>Spicy</em> }</p>
        <button onClick={handleAdd} className='add-button'>Add</button>
      </Card>
    </div>
  )
}



export default Dish
