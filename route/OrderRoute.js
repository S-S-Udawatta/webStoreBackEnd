const express = require('express');
const orderController = require('../controller/OrderController');

const router = express.Router();

router.post('/place',orderController.placeOrder );
router.get('/list', orderController.getOrderList);
module.exports = router;