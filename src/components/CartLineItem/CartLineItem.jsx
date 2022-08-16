import "./CartLineItem.css";
import Button from "react-bootstrap/Button";
import * as ordersAPI from "../../utilities/orders-api";
import { useState } from "react";

export default function CartLineItem({
  lineItem,
  isPaid,
  handleAddToOrder,
  setCart,
}) {
  const lineItemSubtotal = (lineItem.item.price * lineItem.qty).toFixed(2);
  const [rockQty, setRockQty] = useState(lineItem.qty);
  const [rockId] = useState(lineItem._id);
  const [rockId2] = useState(lineItem._id);
  const [zero] = useState(0);

  async function handleUpdateOrder(orderItem) {
    const updatedCart = await ordersAPI.updateCartItem(orderItem);
    setCart(updatedCart);
  }

  const updateOrder = (evt) => {
    evt.preventDefault();
    const orderItem = {
      rockQty,
      rockId,
    };
    handleUpdateOrder(orderItem);
  };

  const removeFromOrder = (evt) => {
    console.log(evt);
    evt.preventDefault();
    const orderItem = {
      rockQty,
      rockId,
    };
    orderItem.rockQty = 0;
    handleUpdateOrder(orderItem);
  };

  return (
    <>
      <div className="cartItemCard">
        <div className="itemName">{lineItem.item.name}</div>
        <img className="cartItemPicture" src={lineItem.item.img} alt="rock" />

        <form className="form-group mt-3 pd-0" onSubmit={updateOrder}>
          <label className="lineItemLabel">Item Quantity: {lineItem.qty}</label>
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
            Set Quantity
          </Button>
        </form>
        <div className="lineItemLabel">Price: ${lineItem.item.price}</div>
        <div className="lineItemLabel">Item Subtotal: ${lineItemSubtotal}</div>
        <form className="form-group mt-3 pd-0" onSubmit={removeFromOrder}>
          <input readOnly type="hidden" value={zero} />
          <input value={rockId2} readOnly type="hidden" />
          <Button type="submit" className="btn-sm btn-danger p-3 mt-3 mb-3">
            Remove Item
          </Button>
        </form>
      </div>
    </>
  );
}
