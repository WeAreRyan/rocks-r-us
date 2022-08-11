import "./PaidOrder.css";
import OrderItems from "../OrderItems/OrderItems";

export default function PaidOrder({ order }) {
  const lineItems = order.lineItems;
  const orderItems = lineItems.map((lineItem) => (
    <OrderItems key={lineItem._id} lineItem={lineItem} />
  ));

  return (
    <>
      <div className="paidOrderBox">
        <div className="orderInfo">
        <h3>Order Number: {order.orderID}</h3>
        <div>Order Items: {orderItems}</div>
        <div>Order Total: {order.orderTotal.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
}
