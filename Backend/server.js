const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const shipmentRoutes = require("./routes/shipmentRoutes");
const errorHandler = require("./middleware/errorHandler");
const requestLogger = require("./middleware/requestLogger");
const connectDB = require("./config/dbConnect");

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(morgan("dev")); // Log requests to the console
app.use(requestLogger); // Use the request logger middleware

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
  })
);

app.use(express.json()); // Built-in alternative to body-parser for JSON
app.use(express.urlencoded({ extended: true })); // Built-in alternative to body-parser for URL-encoded data

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/api", shipmentRoutes); // Use shipment routes under /api

// Error Handling Middleware (should be the last middleware)
app.use(errorHandler);

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
