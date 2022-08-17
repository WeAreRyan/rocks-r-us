import sendRequest from "./send-request";
const BASE_URL = "/api/orders";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(orderItem) {
  console.log(orderItem);
  return sendRequest(
    `${BASE_URL}/cart/items/${orderItem.rockId}`,
    "POST",
    orderItem
  );
}

export function updateCartItem(orderItem) {
  console.log(orderItem);
  return sendRequest(`${BASE_URL}/cart/update`, "POST", orderItem);
}

export function checkout(user) {
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST", user._id);
}

export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`);
}
