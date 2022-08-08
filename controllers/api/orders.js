const Order = require("../../models/order");
const Item = require("../../models/item");

module.exports = {
  cart,
  addToCart, 
  setItemQtyInCart, 
  checkout
};

// Creates new cart
async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  }

// Adds item to the user cart
async function addToCart(req, res) {
  console.log("controllers > orders > addToCart fired");
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
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
