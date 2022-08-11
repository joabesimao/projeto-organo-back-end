const { Router } = require("express");

const router = Router();

router.get("/products", ProductsController.getAllProducts);

module.exports = router;
