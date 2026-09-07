import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CartProvider from "./components/CartProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import Home from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import CheckoutPage from "./pages/Checkout.jsx";

import "./css/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route
              path="/checkout"
              element={<CheckoutPage />}
            />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);