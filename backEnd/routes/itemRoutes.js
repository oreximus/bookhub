const express = require("express");
const { fetchBooks } = require("../controllers/itemController.js");
const {
  fetchCart,
  insertCart,
  updateCart,
  deleteCart,
} = require("../controllers/shopControllers.js");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken.js");

router.get("/book/data", fetchBooks);
router.get("/cart/:user_id", fetchCart);
router.post("/cart/insert", verifyToken, insertCart);
router.post("/cart/update", verifyToken, updateCart);
router.post("/cart/delete", verifyToken, deleteCart);

module.exports = router;
