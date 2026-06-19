import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";


function FundsPage() {
  const [funds, setFunds] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchFunds();
  }, []);

  const fetchFunds = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("https://axenor-7t91.onrender.com/api/funds", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFunds(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addFunds = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://axenor-7t91.onrender.com/api/funds/add",
        {
          amount,
          description: "Funds Added",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Funds Added Successfully 💰");
      setAmount("");
      fetchFunds();
    } catch (error) {
      toast.error("Failed to Add Funds ❌");
      console.log(error);
    }
  };
  const withdrawFunds = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://axenor-7t91.onrender.com/api/funds/withdraw",
        {
          amount,
          description: "Funds Withdrawn",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Funds Withdrawn Successfully 💸");
      setAmount("");
      fetchFunds();
    } catch (error) {
      toast.error(error.response?.data?.message || "Withdrawal Failed ❌");
    }
  };

  const balance = funds.reduce((total, item) => {
    return item.type === "ADD" ? total + item.amount : total - item.amount;
  }, 0);

  return (
    <div className="d-flex">
      <Sidebar />
    
      

      <div className="flex-grow-1 p-5">
        <h2 className="fw-bold mb-4">Funds</h2>

        <div className="card border-0 shadow-sm p-4 mb-4">
          <h4>Available Balance</h4>

          <h1 className="text-success">₹{balance}</h1>

          <div className="mt-3 d-flex">
            <input
              type="number"
              className="form-control me-2"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button className="btn btn-success me-2" onClick={addFunds}>
              Add Funds
            </button>

            <button className="btn btn-danger" onClick={withdrawFunds}>
              Withdraw
            </button>
          </div>
        </div>

        <div className="card border-0 shadow-sm p-4">
          <h4 className="mb-3">Transactions</h4>

          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {funds.map((item) => (
                <tr key={item._id}>
                  <td
                    className={
                      item.type === "ADD"
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {item.type}
                  </td>

                  <td>₹{item.amount}</td>

                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FundsPage;
