import"./CSS/style.css"
import Menu from "./components/Menu";
import CartBadge from "./components/CartBadge";
import Checkout from "./components/Checkout";
import ThemeButton from "./components/ThemeButton";
import FeaturedDishes from "./components/FeaturedDishes";

function App() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <CartBadge />
        <ThemeButton />
      </header>

      <main>
        <Menu />
        <Checkout />
      </main>
    </>
  );
}

export default App;