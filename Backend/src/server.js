import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import topicsRouter from "./routes/topics.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
res.json({
message: "Welcome to the TechExcel Backend API!"
});
});

// Check server status
app.get("/api/health", (req, res) => {
res.json({
status: "success",
message: "TechExcel backend is running"
});
});

// Learning topics API
app.use("/api/topics", topicsRouter);

app.listen(PORT, () => {
console.log("TechExcel backend running on port " + PORT);
});
