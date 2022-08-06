import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as itemsAPI from "../../utilities/items-api";
// import * as ordersAPI from "../../utilities/orders-api";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
import RockList from "../../components/RockList/RockList";

export default function RocksListPage({ user, setUser }) {
  const [rockItems, setRockItems] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      console.log("get rockItems function")
      setRockItems(items);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  return (
    <>
      <h2>RocksListPage</h2>
      <RockList rockItems={rockItems} />
    </>
  );
}
