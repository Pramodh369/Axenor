const Fund = require("../models/Fund");

const getFunds = async (req, res) => {
  try {
    const funds = await Fund.find({
      user: req.user.id,
    });

    res.json(funds);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addFund = async (req, res) => {
  try {
    const fund = await Fund.create({
      user: req.user.id,
      amount: req.body.amount,
      type: "ADD",
      description:
        req.body.description || "Funds Added",
    });

    res.status(201).json(fund);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const withdrawFund = async (req, res) => {
  try {
    const funds = await Fund.find({
      user: req.user.id,
    });

    const balance = funds.reduce(
      (total, fund) =>
        fund.type === "ADD"
          ? total + fund.amount
          : total - fund.amount,
      0
    );

    if (req.body.amount > balance) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    const fund = await Fund.create({
      user: req.user.id,
      amount: req.body.amount,
      type: "WITHDRAW",
      description:
        req.body.description ||
        "Funds Withdrawn",
    });

    res.status(201).json(fund);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getFunds,
  addFund,
  withdrawFund,
};