import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioChart from "./PortfolioChart";
import HoldingsTable from "./HoldingsTable";
import RecentOrders from "./RecentOrders";
import Watchlist from "./Watchlist";
import Sidebar from "./Sidebar";
import MarketTicker from "./MarketTicker";
import { Link } from "react-router-dom";


function DashboardPage() {
  const [portfolioValue, setPortfolioValue] = useState(0);

  const [profit, setProfit] = useState(0);

  const [holdingsCount, setHoldingsCount] = useState(0);

  const [watchlistCount, setWatchlistCount] = useState(0);

  const [fundBalance, setFundBalance] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");

      const holdingsRes = await axios.get(
        "https://axenor-7t91.onrender.com/api/holdings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const watchlistRes = await axios.get(
        "https://axenor-7t91.onrender.com/api/watchlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const fundsRes = await axios.get("https://axenor-7t91.onrender.com/api/funds", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const holdings = holdingsRes.data;

      const watchlist = watchlistRes.data;

      const funds = fundsRes.data;

      setHoldingsCount(holdings.length);

      setWatchlistCount(watchlist.length);

      const value = holdings.reduce(
        (total, item) => total + item.qty * item.currentPrice,
        0,
      );

      setPortfolioValue(value);

      const totalProfit = holdings.reduce(
        (total, item) => total + (item.currentPrice - item.avgPrice) * item.qty,
        0,
      );

      setProfit(totalProfit);

      const balance = funds.reduce((total, item) => {
        return item.type === "ADD" ? total + item.amount : total - item.amount;
      }, 0);

      setFundBalance(balance);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-md d-flex">
      <Sidebar />

      <div
        className="flex-grow-1 p-4"
        style={{
          overflowX: "hidden",
        }}
      >
        {" "}
        <div className="d-md-none mb-3">
          <button
            className="btn btn-dark"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            ☰ Menu
          </button>
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="mobileMenu"
        >
          <div className="offcanvas-header">
            <h5>Axenor</h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <Link
              to="/dashboard"
              className="btn btn-outline-primary w-100 mb-2"
            >
              Dashboard
            </Link>

            <Link
              to="/watchlist"
              className="btn btn-outline-primary w-100 mb-2"
            >
              Watchlist
            </Link>

            <Link to="/holdings" className="btn btn-outline-primary w-100 mb-2">
              Holdings
            </Link>

            <Link to="/orders" className="btn btn-outline-primary w-100 mb-2">
              Orders
            </Link>

            <Link to="/funds" className="btn btn-outline-primary w-100 mb-2">
              Funds
            </Link>

            <Link to="/settings" className="btn btn-outline-primary w-100">
              Settings
            </Link>
          </div>
        </div>
        <MarketTicker />
        <div className="mt-4 mb-4">
          <h2 className="fw-bold mb-0">Welcome Back 👋</h2>

          <p className="text-muted">Here's your investment overview today.</p>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-4">
                  <h6 className="text-muted">Portfolio Value</h6>

                  <h3 className="fw-bold">₹{portfolioValue}</h3>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-4">
                  <h6 className="text-muted">Total Profit</h6>

                  <h3
                    className={`fw-bold ${
                      profit >= 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    ₹{profit}
                  </h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4">
                  <h6 className="text-muted">Holdings</h6>

                  <h3 className="fw-bold">{holdingsCount}</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4">
                  <h6 className="text-muted">Watchlist</h6>

                  <h3 className="fw-bold">{watchlistCount}</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4">
                  <h6 className="text-muted">Funds</h6>

                  <h3 className="fw-bold text-primary">₹{fundBalance}</h3>
                </div>
              </div>
            </div>

            <PortfolioChart />
            <HoldingsTable />
            <RecentOrders />
          </div>

          <div className="col-12 col-lg-3">
            <Watchlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
