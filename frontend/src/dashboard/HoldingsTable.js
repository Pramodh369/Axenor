import React, { useEffect, useState } from "react";
import axios from "axios";


function HoldingsTable() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/holdings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setHoldings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4 mt-5">
      <h4 className="fw-bold mb-4">
        Top Holdings
      </h4>

      <table className="table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Current Price</th>
            <th>P&L</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((item) => {
            const pnl =
              (item.currentPrice -
                item.avgPrice) *
              item.qty;

            return (
              <tr key={item._id}>
                <td>{item.stock}</td>

                <td>{item.qty}</td>

                <td>
                  ₹{item.currentPrice}
                </td>

                <td
                  className={
                    pnl >= 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  ₹{pnl}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HoldingsTable;