const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/orders");

router.get("/cart", ordersCtrl.cart);
router.post("/cart/items/:orderItem", ordersCtrl.addToCart);
router.post("/cart/update", ordersCtrl.updateCartItem);
router.put("/cart/qty", ordersCtrl.setItemQtyInCart);
router.get("/history", ordersCtrl.orderHistory);
router.post("/cart/checkout", ordersCtrl.checkout);

module.exports = router;
