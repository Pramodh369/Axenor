const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getFunds,
  addFund,
  withdrawFund,
} = require("../controllers/fundController");

router.get(
  "/",
  authMiddleware,
  getFunds
);

router.post(
  "/add",
  authMiddleware,
  addFund
);

router.post(
  "/withdraw",
  authMiddleware,
  withdrawFund
);

module.exports = router;