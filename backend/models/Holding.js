const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  stock: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  avgPrice: {
    type: Number,
    required: true,
  },

  currentPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "Holding",
  holdingSchema
);