const express = require("express");
const router = express.Router();

const products = require("../controllers/products");

router.get("/", products.list);
router.get("/:id", products.searchById);
router.post("/new", products.insert);
router.put("/update/:id", products.update);
router.delete("/delete/:id", products.del);

module.exports = router;
