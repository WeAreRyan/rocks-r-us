const Order = require("../../models/order");
const Item = require("../../models/item");

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  orderHistory,
  updateCartItem,
};

// Creates new cart
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Adds item to the user cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.body); //req.params
  res.json(cart);
}

async function updateCartItem(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.updateCartItem(req.body); //req.params
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  console.log(cart);
  res.json(cart);
}

// Pulls all orders in a user's history
async function orderHistory(req, res) {
  const orders = await Order.find({ user: req.user._id, isPaid: true }).exec();
  orders.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  res.json(orders);
}
