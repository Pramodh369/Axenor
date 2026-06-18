import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const [stock, setStock] = useState("");
  const [type, setType] = useState("BUY");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/orders",
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

  const addOrder = async () => {
  try {
    const token = localStorage.getItem("token");

    if (editId) {
      await axios.put(
        `http://localhost:5000/api/orders/${editId}`,
        {
          stock,
          type,
          qty,
          price,
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
        "http://localhost:5000/api/orders",
        {
          stock,
          type,
          qty,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    fetchOrders();

    setStock("");
    setType("BUY");
    setQty("");
    setPrice("");
  } catch (error) {
    console.log(error);
  }
};
 const deleteOrder = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchOrders();
  } catch (error) {
    console.log(error);
  }
};
  const handleEdit = (item) => {
    setEditId(item._id);

    setStock(item.stock);
    setType(item.type);
    setQty(item.qty);
    setPrice(item.price);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-5">

        <h2 className="fw-bold mb-4">
          Orders
        </h2>

        <div className="card border-0 shadow-sm p-4 mb-4">

          <div className="row g-3">

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>BUY</option>
                <option>SELL</option>
              </select>
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Qty"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-primary w-100"
                onClick={addOrder}
              >
                {editId
                  ? "Update Order"
                  : "Add Order"}
              </button>
            </div>

          </div>

        </div>

        <div className="card border-0 shadow-sm p-4">

          <table className="table">

            <thead>
              <tr>
                <th>Stock</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
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

                  <td>₹{item.price}</td>

                  <td>{item.status}</td>

                  <td>

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteOrder(item._id)
                      }
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
  );
}

export default OrdersPage;