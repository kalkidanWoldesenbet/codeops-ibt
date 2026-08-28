import React from 'react'
import Dish from './Dish'

function Main() {
    const menu = [
        {name:"Doro wot", price: "400 ",spicy:true},
        {name:"Kitfo", price: "500 ",spicy:false},
        {name:"Pasta", price: "250 ",spicy:false},
    ]

  return (
    <div className='card-container'>
      {
      menu.map((item, index) => (
        <Dish key={index} name={item.name} price={item.price} spicy={item.spicy}/>
      ))}
    </div>
  )
}

export default Main
