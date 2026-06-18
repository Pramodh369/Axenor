const Order = require("../models/Order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Order deleted",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const seedOrders = async (req, res) => {
  try {
    const data = [
      {
        stock: "RELIANCE",
        type: "BUY",
        qty: 10,
        price: 2950,
      },
      {
        stock: "TCS",
        type: "BUY",
        qty: 5,
        price: 3850,
      },
      {
        stock: "INFY",
        type: "SELL",
        qty: 8,
        price: 1620,
      },
    ];

    await Order.insertMany(data);

    res.json({
      message: "Orders inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  seedOrders,
};