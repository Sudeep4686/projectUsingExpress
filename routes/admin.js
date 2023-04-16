const path = require('path');
const express = require('express');

const productController = require('../controllers/products')
const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/add-product', productController.getAddProducts);

router.post('/add-product',productController.postAddProduct);

router.get('/contact', contactController.getContactInfo);

module.exports = router;