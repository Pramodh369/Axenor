const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    enum: ["ADD", "WITHDRAW"],
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Fund",
  fundSchema
);