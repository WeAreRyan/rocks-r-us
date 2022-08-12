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
        <div className="itemName">{lineItem.item.name}</div>
        <img className="cartItemPicture" src={lineItem.item.img} />

        <form className="form-group mt-3 pd-0" onSubmit={updateOrder}>
          <label className="lineItemLabel">Item Quantity: </label>
          <br />
          <input
            className="itemQuantityInput"
            type="number"
            value={rockQty}
            onChange={(evt) => setRockQty(evt.target.value)}
          />
          <input value={rockId} readOnly type="hidden" />
          <br />
          <Button type="submit" className="btn-md btn-light p-3 mt-3 mb-3">
            Update Quantity
          </Button>
        </form>
        <div className="lineItemLabel">Price: ${lineItem.item.price}</div>
        <div className="lineItemLabel">Item Subtotal: ${lineItemSubtotal}</div>
      </div>
    </>
  );
}
