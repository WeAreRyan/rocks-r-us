import { useState, useEffect, useRef } from "react";
import { getOrderHistory } from "../../utilities/orders-api"

export default function OrderHistoryPage() {
    const [ orders, setOrders ] = useState();
    
    useEffect(function() {
        async function orderHistory() {
        const orders = await getOrderHistory()
        setOrders(orders)
        }
        orderHistory()
    }, [])

    console.log(orders)

    return <h2>Order History Page</h2>
}