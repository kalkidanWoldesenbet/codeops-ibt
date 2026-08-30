import { useState } from 'react';
import Card from './Card';


function Dish({name, price,spicy, currency="ETB"}) {
  
  const [count,setCount] = useState(0);

  return (
    <div className='dish'>
      <Card>
        <h2>{name} Quantity: {count}</h2>
        <p>{price} {currency}</p>
        <p>{spicy && <em>Spicy</em> }</p>
        <button onClick={()=>{setCount(count + 1)}}>Add</button>
        
      </Card>
    </div>
  )
}



export default Dish
