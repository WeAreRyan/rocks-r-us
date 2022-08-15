import './RockListPage.css'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
// import * as ordersAPI from "../../utilities/orders-api";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
import RockList from "../../components/RockList/RockList";
// import { eventNames } from '../../../models/rockType';


export default function RocksListPage({ user, setUser, handleAddToOrder, setCart, showCart, cartToggleOn }) {
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
      {/* <div className="lotsOfRocks">LOOK AT ALL THESE ROCKS!!!</div> */}
      <div className={showCart && "col-8 sol-sm-4"}>
        <div className="scrollBox">
        <div className="rockList">
      <RockList rockItems={rockItems} cartToggleOn={cartToggleOn} showCart={showCart}
      handleAddToOrder={handleAddToOrder}
       />
       </div>
       </div>
      </div>
    </>
  );
}
