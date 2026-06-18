const express = require("express");
const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
  seedWatchlist,
} = require("../controllers/watchlistController");

router.get(
  "/",
  authMiddleware,
  getWatchlist
);

router.post(
  "/",
  authMiddleware,
  createWatchlist
);

router.put(
  "/:id",
  authMiddleware,
  updateWatchlist
);

router.delete(
  "/:id",
  authMiddleware,
  deleteWatchlist
);

router.get("/seed", seedWatchlist);

module.exports = router;