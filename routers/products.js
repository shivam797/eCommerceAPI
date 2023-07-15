const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.productList);
router.get('/create', productController.create);
router.delete('/:id', productController.destroy);
router.post('/:id/update_quantity/', productController.details);

module.exports = router;