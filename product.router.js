const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const upload = require('../config/multer.config');

router.post('/',upload.single('productImage'),productController.createProduct);
router.get('/',productController.getProducts);
// // router.put('/:id',upload,productController.updateProducts);
// router.get('/:id',productController.getProductById);
// router.delete('/:id',productController.deleteProductID);

module.exports= router;