import './OrderHistory'
import PaidOrder from "../../components/PaidOrder/PaidOrder"

export default function OrderHistory( {orders} ) {
  const userOrderHistory = orders.map((order) => (
    <PaidOrder key={order._id} order={order} />
  ));

  return(
<div className="orderHistory">
    <div className="completedOrder">
    {userOrderHistory}
    </div>
    </div>

  )
} 