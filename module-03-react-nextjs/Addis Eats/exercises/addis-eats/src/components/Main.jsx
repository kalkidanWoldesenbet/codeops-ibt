import React from 'react'
import Dish from './Dish'

function Main() {
    const menu = [
        {name:"Doro wot", price: "400 ETB"},
        {name:"Kitfo", price: "500 ETB"},
        {name:"Pasta", price: "250 ETB"},
    ]

  return (
    <div className='card-container'>
      {
      menu.map((item, index) => (
        <Dish key={index} name={item.name} price={item.price}/>
      ))}
    </div>
  )
}

export default Main
