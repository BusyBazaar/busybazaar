const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/products.js');

router.post('/add', createProduct, (req, res) => {
  return res.status(200).send('Product created Successfully');
});

module.exports = router;