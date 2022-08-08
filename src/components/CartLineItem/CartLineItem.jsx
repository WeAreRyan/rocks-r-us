export default function CartLineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <>
      <div style={{color: "red"}}>{lineItem.item.name}</div> 
      <div style={{color: "red"}}>{lineItem.qty}</div> 
      </>
    );
  }