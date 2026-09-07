import { Link } from "react-router-dom";

function Cart() {
  return (
    <section>
      <h2>Your Cart</h2>

      <p>Your selected dishes will appear here.</p>

      <Link to="/menu">Continue Shopping</Link>
    </section>
  );
}

export default Cart;