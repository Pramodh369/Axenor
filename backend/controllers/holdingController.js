const Holding = require("../models/Holding");

const getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({
      user: req.user.id,
    });

    res.json(holdings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const seedHoldings = async (req, res) => {
  try {
    const data = [
      {
        stock: "RELIANCE",
        qty: 20,
        avgPrice: 2800,
        currentPrice: 2950,
      },
      {
        stock: "TCS",
        qty: 15,
        avgPrice: 3700,
        currentPrice: 3850,
      },
      {
        stock: "INFY",
        qty: 25,
        avgPrice: 1650,
        currentPrice: 1620,
      },
    ];

    await Holding.insertMany(data);

    res.json({
      message: "Data inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createHolding = async (req, res) => {
  try {
    const holding = await Holding.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(holding);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateHolding = async (req, res) => {
  try {
    const holding = await Holding.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(holding);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteHolding = async (req, res) => {
  try {
    const holding = await Holding.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Holding deleted successfully",
      holding,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getHoldings,
  seedHoldings,
  createHolding,
  updateHolding,
  deleteHolding,
};