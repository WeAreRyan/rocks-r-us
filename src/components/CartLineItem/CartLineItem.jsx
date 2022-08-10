import './CartLineItem.css'

export default function CartLineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <>
      <div style={{color: "red"}}>{lineItem.item.name}</div> 
      <img className="cartItemPicture" src={lineItem.item.img} />
      <div style={{color: "red"}}>{lineItem.qty}</div> 
      <div style={{color: "red"}}>Price: ${lineItem.item.price}</div> 
      <div style={{color: "red"}}>Item Subtotal: ${lineItem.item.price * lineItem.qty}</div> 
      </>
    );
  }