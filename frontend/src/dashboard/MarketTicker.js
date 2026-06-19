import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";

function MarketTicker() {
  const [stocks, setStocks] = useState([
  {
    symbol: "RELIANCE",
    price: "...",
    change: 0,
  },
  {
    symbol: "TCS",
    price: "...",
    change: 0,
  },
  {
    symbol: "INFY",
    price: "...",
    change: 0,
  },
]);

  useEffect(() => {
    fetchMarket();
  }, []);

  const fetchMarket = async () => {
    try {
      const res = await axios.get(
        "https://axenor-7t91.onrender.com/api/market"
      );

      setStocks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ticker-container mb-4">
      <div className="ticker-track">

        {stocks.length === 0 ? (
  <span className="ms-3">
    Loading Market Data...
  </span>
) : (
  stocks
    .concat(stocks)
    .map((stock, index) => (
      <span
        key={index}
        className="ticker-item"
      >
        <strong>
          {stock.symbol}
        </strong>

        {" "}
        ₹{stock.price}

        <span
          className={
            stock.change >= 0
              ? "text-success ms-2"
              : "text-danger ms-2"
          }
        >
          {stock.change.toFixed(2)}%
        </span>
      </span>
    ))
)}

      </div>
    </div>
  );
}

export default MarketTicker;