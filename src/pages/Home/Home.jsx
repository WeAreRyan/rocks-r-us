import "./Home.css";
import Cart from "../../components/Cart/Cart";
import RockList from "../../components/RockList/RockList";
import * as itemsAPI from "../../utilities/items-api";
import { useState, useEffect } from "react";

export default function Home({
  user,
  setUser,
  cartToggleOff,
  order,
  setCart,
  handleAddToOrder,
  cartToggleOn,
  handleCheckout,
}) {
  const [rockItems, setRockItems] = useState([]);

  useEffect(function () {
    // pulls all items from db to display on page
    async function getItems() {
      const items = await itemsAPI.getAll();
      setRockItems(items);
    }
    getItems();
  }, []);

  cartToggleOff();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4">
            <div className="scrollBox">
              <h3 className="homePageBanner">About Us.. and our rocks</h3>
              <img
                className="blurbImg"
                src="https://images.unsplash.com/photo-1603947929333-7d19dd9a1533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="rocky scenery"
              />
              <div className="blurb">
                Welcome to Rocks-R-Us! This is a showcase from a developer who
                wanted to make a online storefront. Naturally this online
                "store" should sell the most interesting of items, as the
                developer could chose from anything in the world to stock at
                this pretend store. Nope! This store just sells rocks. Not
                interesting rocks, or shiny stones, just rocks. Like the ones
                you find outside on the ground back when we went outside. But I
                digress, please navigate around, add items to your cart, remove
                those items, update their quantities. When you go to checkout
                nothing will happen, except your cart will be cleared and a new
                one create. Enjoy your time here at Rocks-R-Us!
              </div>
              <div className="card m-auto mx-5 bg-secondary">
                <div>About the Developer</div>
                <img
                  className="rounded mx-auto d-block"
                  height="20%"
                  width="20%"
                  src="https://i.imgur.com/oiwOjNV.jpg"
                  alt="dev"
                />
                <div>Ryan Okamoto</div>
                <div>"I've done that before, it'll be easy"</div>
                <a
                  className="devLink"
                  href="https://www.linkedin.com/in/ryan-okamoto-9a8b19222/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="devLink"
                  href="https://github.com/WeAreRyan"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-4">
            <div className="scrollBox px-5">
              <h3 className="homePageBanner">Welcome {user.name}! Check Out These Rocks!</h3>
              <RockList
                rockItems={rockItems}
                handleAddToOrder={handleAddToOrder}
                user={user}
                setUser={setUser}
                setCart={setCart}
                cartToggleOn={cartToggleOn}
              />
            </div>
          </div>
          <Cart
            order={order}
            setCart={setCart}
            handleCheckout={handleCheckout}
          />
        </div>
      </div>
    </>
  );
}
