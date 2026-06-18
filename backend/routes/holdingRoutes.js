const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getHoldings,
  seedHoldings,
  createHolding,
  updateHolding,
  deleteHolding,
} = require("../controllers/holdingController");

router.get("/", authMiddleware, getHoldings);

router.get("/seed", seedHoldings);

router.post("/", authMiddleware, createHolding);

router.put("/:id", authMiddleware, updateHolding);

router.delete("/:id", authMiddleware, deleteHolding);

module.exports = router;