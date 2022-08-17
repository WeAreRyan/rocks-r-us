import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as ordersAPI from "../../utilities/orders-api";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import RocksListPage from "../RocksListPage/RocksListPage";
import OrderHistoryPage from "../../pages/OrderHistoryPage/OrderHistoryPage";
import Cart from "../../components/Cart/Cart";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState(null);
  const navigate = useNavigate();

  useEffect(
    function () {
      async function getCart() {
        const cartData = await ordersAPI.getCart();
        setCart(cartData);
      }
      getCart();
    },
    [showCart]
  );

  function cartToggle() {
    if (showCart) {
      setShowCart(null);
    } else {
      setShowCart(true);
    }
  }
  function cartToggleOn() {
    if (!showCart) {
      setShowCart(true);
    }
  }
  function cartToggleOff() {
    if (showCart) {
      setShowCart(null);
    }
  }

  async function handleAddToOrder(orderItem) {
    const updatedCart = await ordersAPI.addItemToCart(orderItem);
    setCart(updatedCart);
  }

  // checkout function, sets order status to isPaid: true
  async function handleCheckout() {
    const order = await ordersAPI.checkout(user._id);
    cartToggleOff();
    navigate("/orders/history");
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
          <div className="banner">Rocks-R-Us</div>
          <hr />
          <div className="container-fluid">
            <div className="row mr-0">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      user={user}
                      setUser={setUser}
                      cartToggleOff={cartToggleOff}
                      order={cart}
                      setCart={setCart}
                      handleAddToOrder={handleAddToOrder}
                      cartToggleOn={cartToggleOn}
                      handleCheckout={handleCheckout}
                    />
                  }
                />
                <Route
                  path="/rocks"
                  element={
                    <RocksListPage
                      handleAddToOrder={handleAddToOrder}
                      user={user}
                      setUser={setUser}
                      setCart={setCart}
                      showCart={showCart}
                      cartToggleOn={cartToggleOn}
                    />
                  }
                />
                <Route
                  path="/orders/history"
                  element={
                    <OrderHistoryPage
                      user={user}
                      setUser={setUser}
                      showCart={showCart}
                    />
                  }
                />
                <Route path="/*" element={<Navigate to="/" />} />
              </Routes>
              {showCart && (
                <Cart
                  order={cart}
                  handleCheckout={handleCheckout}
                  handleAddToOrder={handleAddToOrder}
                  setCart={setCart}
                />
              )}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
