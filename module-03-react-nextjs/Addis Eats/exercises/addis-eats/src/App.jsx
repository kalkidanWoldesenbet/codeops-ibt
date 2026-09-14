import Menu from "./components/Menu";
import CartBadge from "./components/CartBadge";

import FeaturedDishes from "./components/FeaturedDishes";
import OrderStateDemo from "./components/OrderStateDemo";
import ThemeButton from "./components/ThemeButton";
import ErrorBoundary from "./components/ErrorBoundary";
import  "./CSS/style.css"
import { lazy, Suspense } from "react";

const Checkout = lazy(() => import("./components/Checkout"));
const Receipt = lazy(() => import("./components/Receipt"));

function App() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>

        <div>
          <CartBadge />
          <ThemeButton />
        </div>
      </header>

      <main>
        <FeaturedDishes />

        <ErrorBoundary fallback="The menu could not be loaded. Please try again.">
          <Menu />
        </ErrorBoundary>

        <Suspense fallback={<p>Loading checkout...</p>} >
          <Checkout />
        </Suspense>

        <Suspense fallback={<p>Loading receipt...</p>}>
          <Receipt />
        </Suspense>
        
        <OrderStateDemo />
      </main>
    </>
  );
}

export default App;