import './CartLineItem.css'

export default function CartLineItem({ lineItem, isPaid, handleChangeQty }) {

    const lineItemSubtotal = (lineItem.item.price * lineItem.qty).toFixed(2)
    return (
        <>
      <div style={{color: "red"}}>{lineItem.item.name}</div> 
      <img className="cartItemPicture" src={lineItem.item.img} />
      <div style={{color: "red"}}>{lineItem.qty}</div> 
      <div style={{color: "red"}}>Price: ${lineItem.item.price}</div> 
      <div style={{color: "red"}}>Item Subtotal: ${lineItemSubtotal}</div> 
      </>
    );
  }