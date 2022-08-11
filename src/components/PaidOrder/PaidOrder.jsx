export default function PaidOrder( {order} ) {
    const paidTotal = order.orderTotal.toFixed(2)
    return (
        <>
        <div>
            ${paidTotal}, 
            </div>
            <div>
            Order Number: {order.orderID}, 
            </div>
            </>
    )
}