import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

export function addItemToCart(orderItem) { //itemId
  console.log(orderItem)
    return sendRequest(`${BASE_URL}/cart/items/${orderItem.rockId}`, 'POST', orderItem); //itemId
  }

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`)
}