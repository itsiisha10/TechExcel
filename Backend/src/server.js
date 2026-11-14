import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import topicsRouter from "./routes/topics.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS: Support CORS_ORIGIN for production, while preserving local development access
const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim().replace(/\/+$/, ""))
    : [];

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (e.g. curl, server-to-server, Render health checks)
            if (!origin) return callback(null, true);

            // In non-production, allow localhost origins
            if (process.env.NODE_ENV !== "production") {
                if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) {
                    return callback(null, true);
                }
            }

            // Check against configured allowed origins (single URL, comma-separated list, or '*')
            if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            // Fallback for development if CORS_ORIGIN is not specified
            if (allowedOrigins.length === 0 && process.env.NODE_ENV !== "production") {
                return callback(null, true);
            }

            return callback(new Error(`CORS policy blocked access from origin: ${origin}`));
        },
        credentials: true,
    })
);

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
