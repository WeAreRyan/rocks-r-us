import CartLineItem from "../CartLineItem/CartLineItem";
import {  useEffect } from "react";

export default function Cart({ order, handleCheckout, handleAddToOrder, setCart }) {
  if (!order) return <div>NO ITEMS IN CART</div>;

  const lineItems = order.lineItems.map((item) => (
    <CartLineItem
    handleAddToOrder={handleAddToOrder}
      lineItem={item}
      isPaid={order.isPaid}
      key={item._id}
      setCart={setCart}
      //   handleChangeQty={handleChangeQty}
    />
  ));
    

  return (
    <>
      <h4>Order Number: {order.orderID}</h4>
      <div>{lineItems}</div>
      <div>Order Total: ${order.orderTotal.toFixed(2)}</div>
      <button className="" onClick={handleCheckout}>
        CHECKOUT
      </button>
    </>
  );
}
