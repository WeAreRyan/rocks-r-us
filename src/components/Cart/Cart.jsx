import "./Cart.css"
import Button from "react-bootstrap/Button";
import CartLineItem from "../CartLineItem/CartLineItem";
import { useEffect } from "react";

export default function Cart({
  order,
  handleCheckout,
  handleAddToOrder,
  setCart,
}) {
  if (!order) return <div>NO ITEMS IN CART</div>;

  const lineItems = order.lineItems.map((item) => (
    <CartLineItem
      handleAddToOrder={handleAddToOrder}
      lineItem={item}
      isPaid={order.isPaid}
      key={item._id}
      setCart={setCart}
    />
  ));

  return (
    <>
    <div className="col-6 col-sm-4">
      <div className="scrollBox">
      <div className="Cart">
      <div className="cartLabel">CART</div>
      <div className="orderDetailText">Order Number: {order.orderID}</div>
      <div className="orderDetailText">Order Total: ${order.orderTotal.toFixed(2)}</div>
      <Button className="btn btn-light checkoutButton" onClick={handleCheckout}>
        CHECKOUT
      </Button>
      <div className="cartItems">{lineItems}</div>
      </div>
      </div>
      </div>

    </>
  );
}
