import "./OrderHistory";
import PaidOrder from "../../components/PaidOrder/PaidOrder";

export default function OrderHistory({ orders }) {
  const userOrderHistory = orders
    .sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
    .map((order) => <PaidOrder key={order._id} order={order} />);

  return (
    <div className="orderHistory">
      {orders.length <= 0 && (
        <>
          <br />
          <br />
          <div className="noOrderHistory">No orders to display</div>
        </>
      )}
      <div className="completedOrder">{userOrderHistory}</div>
    </div>
  );
}
