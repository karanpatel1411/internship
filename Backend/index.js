const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../Backend/src/config/db");
const authRoutes = require("../Backend/src/routes/authRoutes");


dotenv.config();
const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
