import PaidOrder from "../../components/PaidOrder/PaidOrder"

export default function OrderHistory( {orders} ) {
  const userOrderHistory = orders.map((order) => (
    <PaidOrder key={order._id} order={order} />
  ));

  return(
    <>
    {userOrderHistory}
    </>
  )
} 