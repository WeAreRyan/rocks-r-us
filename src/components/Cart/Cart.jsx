import "./Cart.css";
import Button from "react-bootstrap/Button";
import CartLineItem from "../CartLineItem/CartLineItem";
import { useEffect } from "react";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";

export default function Cart({
  order,
  handleCheckout,
  handleAddToOrder,
  setCart,
}) {
  if (!order) return <div>NO ITEMS IN CART</div>;
console.log(order)
  const lineItems = order.lineItems.sort((a, b) => a.item.updatedAt > b.item.updatedAt ? -1 : 1).map((item) => (
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
      <div className="col-4 col-sm-4">
      <div className="Cart">
        <div className="scrollBox">
        {order.orderTotal <= 0 && <>
        <div className="cartLabel">Your Cart is empty</div>
          </>}

        {order.orderTotal > 0 && <>
          <div className="cartLabel">CART</div>
        <div className="orderDetailText">Order Number: {order.orderID}</div>
            <div className="orderDetailText">
              Order Total: ${order.orderTotal.toFixed(2)}
            </div>
            <Button
              className="btn btn-light checkoutButton"
              onClick={handleCheckout}
            >
              CHECKOUT
            </Button></>}
            <div className="container-fluid">
              <div className="row no-gutters">{lineItems}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
