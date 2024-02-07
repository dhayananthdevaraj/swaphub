const express = require("express");
const oldproductsController = require("../controllers/oldProductsController");
const { validateToken } = require("../authUtils");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/product",   oldproductsController.getAllOldProducts);
router.get("/product/user/:userId",oldproductsController.getOldProductsBySellerId);
router.get("/product/:productId",   oldproductsController.getOldProductById);
router.post("/product",   oldproductsController.addProduct);
router.put("/product/:productId",   oldproductsController.updateOldProduct);
router.delete("/product/:productId",   oldproductsController.deleteOldProduct);
router.get('/users',userController.getAllUsers);

module.exports = router;
