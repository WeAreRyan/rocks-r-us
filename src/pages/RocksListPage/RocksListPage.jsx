import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
// import * as ordersAPI from "../../utilities/orders-api";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
import RockList from "../../components/RockList/RockList";


export default function RocksListPage({ user, setUser }) {
  const [rockItems, setRockItems] = useState([]);
  const [cart, setCart] = useState(null);

  
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

async function handleAddToOrder(itemId) {
  const updatedCart = await ordersAPI.addItemToCart(itemId);
  setCart(updatedCart);
}



  return (
    <>
      <h2>RocksListPage</h2>
      <RockList rockItems={rockItems}
      handleAddToOrder={handleAddToOrder}
       />
  
    </>
  );
}
