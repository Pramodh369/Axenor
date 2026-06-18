const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  seedOrders,
} = require("../controllers/orderController");

router.get(
  "/",
  authMiddleware,
  getOrders
);

router.post(
  "/",
  authMiddleware,
  createOrder
);

router.put(
  "/:id",
  authMiddleware,
  updateOrder
);

router.delete(
  "/:id",
  authMiddleware,
  deleteOrder
);

router.get("/seed", seedOrders);

module.exports = router;