export default function PaidOrder( {order} ) {
    const paidTotal = order.orderTotal.toFixed(2)
    return (
        <>
        <div>
        <h2>Paidorder component</h2>
          
            Order Number: {order.orderID}, 
            </div>
            </>
    )
}