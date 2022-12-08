const express = require('express');
const ProductController = require('../controller/ProductController');

const router = express.Router();

router.post('/add', ProductController.addProduct );
router.put('/update',ProductController.updateProduct  );
router.get('/list', ProductController.listProduct );
router.get('/get', ProductController.getProduct );
router.get('/category', ProductController.listByProductCategory );
router.delete('/delete',ProductController.deleteProduct);
module.exports = router;