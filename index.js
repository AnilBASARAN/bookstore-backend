const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // Allow multiple origins
  credentials: true
}));

// Routes
//book routes
const bookRoutes = require('./src/books/book.route');
app.use("/api/books", bookRoutes);

//order routes
const orderRoutes = require('./src/orders/order.route');
app.use("/api/orders", orderRoutes);

//user routes
const userRoutes = require('./src/users/user.route');
app.use("/api/auth", userRoutes);

//admin routes
const adminRoutes = require('./src/stats/admin.stats');
app.use("/api/admin", adminRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Book server is awesome!');
});

// MongoDB connection
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

main();

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
