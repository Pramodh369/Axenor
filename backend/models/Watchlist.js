const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  stock: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  change: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Watchlist",
  watchlistSchema
);