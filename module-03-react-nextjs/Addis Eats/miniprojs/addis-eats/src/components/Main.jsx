import React from 'react'
import menu from "../data"
import Dish from './Dish'


function Main() {
  const mainCat = menu.filter(
    (item) => item.category ==="Main Course"
  );
  const sideCat = menu.filter(
    (item) => item.category ==="Side Dish"
  );
  const beverage = menu.filter(
    (item) => item.category ==="Beverage"
  );

  if (
      mainCat.length === 0 &&
      sideCat.length === 0 &&
      beverage.length === 0
    ) {
      return <p>No dishes found.</p>;
    }
  return (
    <div>
      <h2>Main Courses</h2>
      <div className='card-container'>
      {
        mainCat.map((item) => (
           <Dish key={item.id} 
            {...item}
            /> 
        ))
      }
      </div>
      <h2>Side Dishes</h2>
      <div className='card-container'>
        {
          sideCat.map((item) => (
             <Dish key={item.id} 
              {...item}
              /> 
          ))
        }
      </div>
      <h2>Beverages</h2>
      <div className='card-container'>
        {
          beverage.map((item) => (
             <Dish key={item.id} 
              {...item}
              /> 
          ))
        }
      </div>
    </div>
    
  )
}

export default Main
