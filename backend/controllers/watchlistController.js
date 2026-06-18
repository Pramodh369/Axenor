const Watchlist = require("../models/Watchlist");

const getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({
      user: req.user.id,
    });

    res.json(watchlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(watchlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      { new: true },
    );

    res.json(watchlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    res.json({
      message: "Deleted",
      watchlist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const seedWatchlist = async (req, res) => {
  try {
    const data = [
      {
        stock: "RELIANCE",
        price: 2950,
        change: "+1.2%",
      },
      {
        stock: "TCS",
        price: 3850,
        change: "+0.8%",
      },
      {
        stock: "INFY",
        price: 1620,
        change: "-0.4%",
      },
    ];

    await Watchlist.insertMany(data);

    res.json({
      message: "Watchlist inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
  seedWatchlist,
};
