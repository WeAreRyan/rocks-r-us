import { useState, useEffect, useRef } from "react";
import { getOrderHistory } from "../../utilities/orders-api";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import PaidOrder from "../../components/PaidOrder/PaidOrder";

export default function OrderHistoryPage({ handleAddToOrder }) {
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
      <h2>Order History</h2>
      <OrderHistory orders={orders}/>
    </>
  );
}
