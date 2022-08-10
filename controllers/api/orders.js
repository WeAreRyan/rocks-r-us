const Order = require("../../models/order");
const Item = require("../../models/item");
const order = require("../../models/order");

module.exports = {
  cart,
  addToCart, 
  setItemQtyInCart, 
  checkout, 
  orderHistory
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
  res.json(cart);
}

// Pulls all orders in a user's history
async function orderHistory(req, res) {
//  const orders = await Order.findAll({order.user === req.user._id && order.isPaid === true}.exec())
 const orders = await Order.find({}).exec()   //order => order.user === req.user._id && order.isPaid === true
 orders.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
 console.log(orders)
 res.json(cart)
}