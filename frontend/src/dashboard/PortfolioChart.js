import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PortfolioChart() {
  const [data, setData] = useState([]);

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

      const holdings = res.data;

      const chartData = holdings.map(
        (item) => ({
          stock: item.stock,
          value:
            item.qty *
            item.currentPrice,
        })
      );

      setData(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4 mt-5">
      <h4 className="fw-bold mb-4">
        Portfolio Holdings Value
      </h4>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="stock" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PortfolioChart;