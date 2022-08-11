import "./CartLineItem.css";
import Button from "react-bootstrap/Button";
import * as ordersAPI from "../../utilities/orders-api";
import { useState } from "react";

export default function CartLineItem({ lineItem, isPaid, handleAddToOrder, setCart }) {
  const lineItemSubtotal = (lineItem.item.price * lineItem.qty).toFixed(2);
  const [rockQty, setRockQty] = useState(lineItem.qty);
  const [rockId] = useState(lineItem._id);

  async function handleUpdateOrder(orderItem) {
    const updatedCart = await ordersAPI.updateCartItem(orderItem);
    setCart(updatedCart);
  }

  const updateOrder = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const orderItem = {
      rockQty,
      rockId,
    };
    handleUpdateOrder(orderItem);
  };

  return (
    <>
      <div className="cartItemCard">
        <div style={{ color: "red" }}>{lineItem.item.name}</div>
        <img className="cartItemPicture" src={lineItem.item.img} />

        <form className="form-group mt-2" onSubmit={updateOrder}>
          <label>Item Quantity: </label>
          <br />
          <input
            className="itemQuantityInput"
            type="number"
            value={rockQty}
            onChange={(evt) => setRockQty(evt.target.value)}
          />
          <input value={rockId} readOnly type="hidden" />
          <br />
          <Button type="submit" className="btn-md btn-success p-3 mt-3 mb-3">
            UpdateTotal
          </Button>
        </form>

        <div style={{ color: "red" }}>{lineItem.qty}</div>
        <div style={{ color: "red" }}>Price: ${lineItem.item.price}</div>
        <div style={{ color: "red" }}>Item Subtotal: ${lineItemSubtotal}</div>
      </div>
    </>
  );
}
