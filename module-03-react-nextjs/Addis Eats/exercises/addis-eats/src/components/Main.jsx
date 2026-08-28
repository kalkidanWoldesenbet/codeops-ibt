import React from 'react'
import Dish from './Dish'

function Main() {
    const menu = [
        {id:1,name:"Doro wot", price: "400 ",spicy:true,category:"Side Dish"},
        {id:2,name:"Kitfo", price: "500 ",spicy:false, category:"Main Course"},
        {id:3,name:"Pasta", price: "250 ",spicy:false, category:"Main Course"},
    ]

    const mainCat = menu.filter(
      (item)=> item.category === "Main Course"
    )

    const sideCat = menu.filter(
      (item)=> item.category === "Side Dish"
    )

    if(mainCat.length === 0 && sideCat.length === 0){
      return <p>No dishes found.</p>
    }
  return (
    <div>
      <h2>Main Courses</h2>
     <div className='card-container'>
       
       {
       mainCat.map((item) => (
         <Dish 
           key={item.id} 
           name={item.name} 
           price={item.price} 
           spicy={item.spicy}
         />
       ))}
     </div>
       <h2>Side Dishes</h2>
     <div className='card-container'>
       {
         sideCat.map((item) =>(
           <Dish
             key={item.id} 
             name={item.name} 
             price={item.price} 
             spicy={item.spicy} 
           />
         ))
       }
      </div>
    </div>
  )
}

export default Main
