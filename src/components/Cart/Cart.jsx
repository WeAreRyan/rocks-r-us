import CartLineItem from "../CartLineItem/CartLineItem";
import {  useEffect } from "react";

export default function Cart({ order, handleCheckout }) {
  if (!order) return <div>NO ITEMS IN CART</div>;

  const lineItems = order.lineItems.map((item) => (
    <CartLineItem
      lineItem={item}
      isPaid={order.isPaid}
      key={item._id}
      //   handleChangeQty={handleChangeQty}
    />
  ));
    

  return (
    <>
      <h2>There is an Order</h2>
      <div>{order._id}</div>
      <div>Order Number: {order.orderID}</div>
      <div>{lineItems}</div>
      <div>Order Total: ${order.orderTotal.toFixed(2)}</div>
      <button className="" onClick={handleCheckout}>
        CHECKOUT
      </button>
    </>
  );
}
