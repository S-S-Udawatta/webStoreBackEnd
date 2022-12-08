const express = require('express');
const customerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/save', customerController.saveCustomer );
router.get('/get?', customerController.getCustomer );
router.get('/get/id', customerController.getCustomerByID );
router.get('/list', customerController.listCustomer );
router.delete('/delete', customerController.deleteCustomer );
module.exports = router;