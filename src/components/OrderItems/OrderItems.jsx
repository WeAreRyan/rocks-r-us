import "./OrderItems.css";
import OrderItem from "../../components/OrderItem/OrderItem";

export default function OrderItems({ lineItem }) {
  console.log(lineItem);
  const itemTotal = (lineItem.qty * lineItem.item.price).toFixed(2);
  return (
    <>
      {/* <div class="item"> */}
      <div className="lineItemTile">
        <div>{lineItem.item.name}</div>
        <div>Item Price: {lineItem.item.price.toFixed(2)}</div>
        <img className="lineItemImg" src={lineItem.item.img} />
        <div>Quantity: {lineItem.qty}</div>
        <div>Item total: {itemTotal}</div>
      </div>
      {/* </div> */}
    </>

    // <ul className="orderItems">

    // {lineItem.map((item) => {
    //   return <OrderItem key={item._id} item={item} />;
    // })}
    // </ul>
  );
}
