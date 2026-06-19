const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const holdingRoutes = require("./routes/holdingRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");
const orderRoutes = require("./routes/orderRoutes");
const fundRoutes = require("./routes/fundRoutes");
const authRoutes = require("./routes/authRoutes");
const marketRoutes = require(
  "./routes/marketRoutes"
);

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/holdings", holdingRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/funds", fundRoutes);
app.use("/api/auth", authRoutes);
app.use(
  "/api/market",
  marketRoutes
);

app.get("/", (req, res) => {
  res.send("Axenor Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});