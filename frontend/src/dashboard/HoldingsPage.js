import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";


function HoldingsPage() {
  const [holdings, setHoldings] = useState([]);
  const [stock, setStock] = useState("");
  const [qty, setQty] = useState("");
  const [avgPrice, setAvgPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("https://axenor-7t91.onrender.com/api/holdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHoldings(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addHolding = async () => {
  try {
    const token = localStorage.getItem("token");

    if (editId) {
      await axios.put(
        `https://axenor-7t91.onrender.com/api/holdings/${editId}`,
        {
          stock,
          qty,
          avgPrice,
          currentPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditId(null);
    } else {
      await axios.post(
        "https://axenor-7t91.onrender.com/api/holdings",
        {
          stock,
          qty,
          avgPrice,
          currentPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    fetchHoldings();

    setStock("");
    setQty("");
    setAvgPrice("");
    setCurrentPrice("");
  } catch (error) {
    console.log(error);
  }
};
  const deleteHolding = async (id) => {
    try {
      await axios.delete(`https://axenor-7t91.onrender.com/api/holdings/${id}`);

      fetchHoldings();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (item) => {
    setEditId(item._id);

    setStock(item.stock);
    setQty(item.qty);
    setAvgPrice(item.avgPrice);
    setCurrentPrice(item.currentPrice);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid py-4">
        <h2 className="fw-bold mb-4">Holdings</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Stock Name"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <input
            type="number"
            placeholder="Avg Price"
            value={avgPrice}
            onChange={(e) => setAvgPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Current Price"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />

          <button onClick={addHolding}>
            {editId ? "Update Holding" : "Add Holding"}
          </button>
        </div>

        <div className="card border-0 shadow-sm p-4">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Quantity</th>
                  <th>Avg Price</th>
                  <th>Current Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {holdings.map((item) => (
                  <tr key={item._id}>
                    <td className="fw-semibold">{item.stock}</td>

                    <td>{item.qty}</td>

                    <td>₹{item.avgPrice}</td>

                    <td>₹{item.currentPrice}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteHolding(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoldingsPage;
