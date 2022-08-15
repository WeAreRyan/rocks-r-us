import "./OrderItems.css";


export default function OrderItems({ lineItem }) {
  const itemTotal = (lineItem.qty * lineItem.item.price).toFixed(2);
  return (
    <>

      <div className="lineItemTile">
        <div>{lineItem.item.name}</div>
        <div>Item Price: ${lineItem.item.price.toFixed(2)}</div>
        <br />
        <img className="lineItemImg" src={lineItem.item.img} />
        <br />
        <br />
        <div>Quantity: {lineItem.qty}</div>
        <div>Item total: ${itemTotal}</div>
      </div>
    </>
  );
}
