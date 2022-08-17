import "./RockListPage.css";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import RockList from "../../components/RockList/RockList";

export default function RocksListPage({
  user,
  setUser,
  handleAddToOrder,
  setCart,
  showCart,
  cartToggleOn,
}) {
  const [rockItems, setRockItems] = useState([]);

  useEffect(function () {
    // pulls all items from db to display on page
    async function getItems() {
      const items = await itemsAPI.getAll();
      setRockItems(items);
    }
    getItems();
    // pulls order associated with user if one exists that has not been checked out.
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  return (
    <>
      <div className={`${showCart ? "col-8 sol-sm-4" : "col-12 sol-sm-8"}`}>
        <div className="scrollBox">
          <div className="rockList">
            <RockList
              rockItems={rockItems}
              cartToggleOn={cartToggleOn}
              showCart={showCart}
              handleAddToOrder={handleAddToOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
}
