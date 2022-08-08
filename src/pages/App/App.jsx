import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as ordersAPI from "../../utilities/orders-api";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NewOrderPage from "../NewOrderPage/newOrderPage";
import RocksListPage from "../RocksListPage/RocksListPage";
import Cart from "../../components/Cart/Cart";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    // pulls current user order, set it to 'cart'
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  function cartToggle() {
    console.log("cartoggle");
    if (showCart) {
      setShowCart(null);
    } else {
      setShowCart(true);
    }
  }

  // checkout function, sets order status to isPaid: true
  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/rocks");
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar
            user={user}
            setUser={setUser}
            showCart={showCart}
            cartToggle={cartToggle}
          />
          <h1>Rocks-R-Us</h1>
          <Routes>
            <Route
              path="/rocks"
              element={<RocksListPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route path="/*" element={<Navigate to="/rocks" />} />
          </Routes>
          {showCart && <Cart order={cart} handleCheckout={handleCheckout} />}
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
