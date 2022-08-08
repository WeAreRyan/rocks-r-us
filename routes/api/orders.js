const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);

module.exports = router;