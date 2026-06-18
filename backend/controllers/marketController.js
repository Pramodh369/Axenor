const YahooFinance =
  require("yahoo-finance2").default;

const yahooFinance = new YahooFinance();

const getMarketData = async (req, res) => {
  try {
    const reliance = await yahooFinance.quote("RELIANCE.NS");
    const tcs = await yahooFinance.quote("TCS.NS");
    const infy = await yahooFinance.quote("INFY.NS");

    res.json([
      {
        symbol: "RELIANCE",
        price: reliance.regularMarketPrice,
        change: reliance.regularMarketChangePercent,
      },
      {
        symbol: "TCS",
        price: tcs.regularMarketPrice,
        change: tcs.regularMarketChangePercent,
      },
      {
        symbol: "INFY",
        price: infy.regularMarketPrice,
        change: infy.regularMarketChangePercent,
      },
    ]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMarketData,
};