const { query } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = require("./itemSchema");

const lineItemSchema = new Schema(
  {
    qty: { type: Number, default: 1 },
    item: itemSchema,
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

orderSchema.virtual("orderTotal").get(function () {
  return this.lineItems.reduce(
    (total, lineItem) => total + lineItem.extPrice,
    0
  );
});

orderSchema.virtual("totalQty").get(function () {
  return this.lineItems.reduce((total, lineItem) => total + lineItem.qty, 0);
});

// last 6 digits of order id to display on cart page
orderSchema.virtual("orderID").get(function () {
  return this.id.slice(-6).toUpperCase();
});

// price of total on a single item in cart
lineItemSchema.virtual("extPrice").get(function () {
  return this.qty * this.item.price;
});

// gets active user's cart if not checked-out previously
orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

// adds an item to existing cart
orderSchema.methods.addItemToCart = async function (orderItem) {
  console.log(orderItem)
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => {
    console.log(lineItem.item._id, orderItem)
    return lineItem.item._id.equals(orderItem.rockId)
  });
  if (lineItem) {
    // It already exists, so increase the qty
    lineItem.qty = parseInt(lineItem.qty) + parseInt(orderItem.rockQty);
  } else {
    const item = await mongoose.model("Item").findById(orderItem.rockId);
    item.qty = orderItem.RockQty
    cart.lineItems.push({ item });
  }
  // const newItem = await cart.lineItems.find((lineItem) =>
  //   lineItem.item._id.equals(orderItem.rockId)
  // );
  // newItem.qty = parseInt(orderItem.rockQty);
  return cart.save();
};

// updates item quantity in cart
orderSchema.methods.updateCartItem = async function (orderItem) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem._id.equals(orderItem.rockId));
  console.log(orderItem)
  if (orderItem.rockQty <= 0) {
    lineItem.remove()
  }
  else if (lineItem) {
    lineItem.qty = parseInt(orderItem.rockQty);
  } else {
    console.log(lineItem)
  }
  return cart.save();
};

// updates cart item total on initial item add to cart

module.exports = mongoose.model("Order", orderSchema);
