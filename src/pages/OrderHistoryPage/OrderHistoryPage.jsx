import { useState, useEffect, useRef } from "react";
import { getOrderHistory } from "../../utilities/orders-api";
import "./OrderHistoryPage.css"
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import PaidOrder from "../../components/PaidOrder/PaidOrder";
import userEvent from "@testing-library/user-event";

export default function OrderHistoryPage({ handleAddToOrder, user }) {
  const [orders, setOrders] = useState([]);

  useEffect(function () {
    // pulls all orders associated with logged in user with isPaid == true
    async function orderHistory() {
      const oHistory = await getOrderHistory();
      setOrders(oHistory);
    }
    orderHistory();
  }, []);

  // const userOrders = orders.map((order) => (
  //   <PaidOrder
  //     key={order._id}
  //     order={order}
  //     handleAddToOrder={handleAddToOrder}
  //   />
  // ));

  return (
    <>
      <div className="userOrderBanner">{user.name}'s Order History</div>
      <hr />
      <OrderHistory orders={orders}/>
    </>
  );
}
