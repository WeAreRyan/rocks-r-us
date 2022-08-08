import sendRequest from './send-request';


export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
  }

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

const BASE_URL = '/api/orders';