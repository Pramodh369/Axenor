import React, { useEffect, useState } from "react";
import axios from "axios";

function Watchlist() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://axenor-7t91.onrender.com/api/watchlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStocks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4">
      <h4 className="fw-bold mb-4">
        Watchlist
      </h4>

      {stocks.map((stock) => (
        <div
          key={stock._id}
          className="d-flex justify-content-between border-bottom py-3"
        >
          <div>
            <strong>{stock.stock}</strong>
          </div>

          <div className="text-end">
            <div>₹{stock.price}</div>

            <small
              className={
                stock.change.includes("-")
                  ? "text-danger"
                  : "text-success"
              }
            >
              {stock.change}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;