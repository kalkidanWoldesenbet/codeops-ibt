import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

function Dish({name, price, currency="ETB", spicy, category}) {
  return (
    <div className='dish'>
      <Card>
        <h3>{name}</h3>
        <p>{price} {currency}</p>
        <p>{category}</p>
        <p>{spicy && <em>Spicy</em> }</p>
      </Card>
    </div>
  )
}

// Dish.PropTypes= {
//   name:PropTypes.string.isRequired,
//   price:PropTypes.number.isRequired,
//   spicy:PropTypes.bool,
//   currency:PropTypes.string,
// };

export default Dish
