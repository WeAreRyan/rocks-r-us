import { useState, useEffect, useRef } from "react";
import { getOrderHistory } from "../../utilities/orders-api";
import "./OrderHistoryPage.css";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

export default function OrderHistoryPage({ handleAddToOrder, user, showCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(function () {
    // pulls all orders associated with logged in user with isPaid == true
    async function orderHistory() {
      const oHistory = await getOrderHistory();
      setOrders(oHistory);
    }
    orderHistory();
  }, []);

  return (
    <>
      <div className={showCart && "col-8"}>
        <div className="scrollBox">
          <div className="userOrderBanner">{user.name}'s Order History</div>
          <OrderHistory orders={orders} />
        </div>
      </div>
    </>
  );
}
