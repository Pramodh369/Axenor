import React, { useEffect, useState } from "react";
import axios from "axios";

function RecentOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://axenor-7t91.onrender.com/api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4 mt-5">
      <h4 className="fw-bold mb-4">
        Recent Orders
      </h4>

      <table className="table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item) => (
            <tr key={item._id}>
              <td>{item.stock}</td>

              <td
                className={
                  item.type === "BUY"
                    ? "text-success fw-bold"
                    : "text-danger fw-bold"
                }
              >
                {item.type}
              </td>

              <td>{item.qty}</td>

              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;