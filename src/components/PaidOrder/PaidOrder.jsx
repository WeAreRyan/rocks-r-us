import "./PaidOrder.css";
import OrderItems from "../OrderItems/OrderItems";

export default function PaidOrder({ order }) {
  const lineItems = order.lineItems;
  const checkoutDate = new Date(order.updatedAt).toDateString();
  const orderItems = lineItems.map((lineItem) => (
    <OrderItems key={lineItem._id} lineItem={lineItem} />
  ));

  return (
    <div className="paidOrderBox">
      <div className="orderInfo">Order Number: {order.orderID}</div>
      <div div className="orderInfo">
        Order Total: ${order.orderTotal.toFixed(2)}
      </div>
      <div className="paidOrderGrid">{orderItems}</div>
      <div className="orderInfo">Order Placed: {checkoutDate}</div>
    </div>
  );
}
