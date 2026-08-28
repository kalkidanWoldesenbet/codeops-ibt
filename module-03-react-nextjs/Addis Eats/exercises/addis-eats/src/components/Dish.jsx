import PropTypes from 'prop-types'
import Card from './Card';

function Dish({name, price,spicy, currency="ETB"}) {
  return (
    <div className='dish'>
      <Card>
        <h2>{name}</h2>
        <p>{price} {currency}</p>
        <p><em>{spicy && <em>Spicy</em> }</em></p>
      </Card>
    </div>
  )
}

Dish.propTypes = {
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  spicy:PropTypes.bool,
  currency:PropTypes.string,
};

export default Dish
