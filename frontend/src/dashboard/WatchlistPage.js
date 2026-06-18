import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [change, setChange] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/watchlist",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setWatchlist(res.data);
  } catch (error) {
    console.log(error);
  }
};

const addWatchlist = async () => {
  try {
    const token = localStorage.getItem("token");

    if (editId) {
      await axios.put(
        `http://localhost:5000/api/watchlist/${editId}`,
        {
          stock,
          price,
          change,
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
        "http://localhost:5000/api/watchlist",
        {
          stock,
          price,
          change,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    fetchWatchlist();

    setStock("");
    setPrice("");
    setChange("");
  } catch (error) {
    console.log(error);
  }
};

  const deleteWatchlist = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/watchlist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchWatchlist();
  } catch (error) {
    console.log(error);
  }
};

  const handleEdit = (item) => {
    setEditId(item._id);

    setStock(item.stock);
    setPrice(item.price);
    setChange(item.change);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-5">

        <h2 className="fw-bold mb-4">
          Watchlist
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

            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Change (+1.2%)"
                value={change}
                onChange={(e) => setChange(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-primary w-100"
                onClick={addWatchlist}
              >
                {editId
                  ? "Update Stock"
                  : "Add Stock"}
              </button>
            </div>

          </div>

        </div>

        <div className="card border-0 shadow-sm p-4">

          <table className="table">

            <thead>
              <tr>
                <th>Stock</th>
                <th>Price</th>
                <th>Change</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {watchlist.map((item) => (
                <tr key={item._id}>

                  <td>{item.stock}</td>

                  <td>₹{item.price}</td>

                  <td
                    className={
                      item.change.includes("-")
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {item.change}
                  </td>

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
                        deleteWatchlist(item._id)
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

export default WatchlistPage;