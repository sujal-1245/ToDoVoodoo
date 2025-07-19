import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";

const app = express();
const port = 3000;

// Enable CORS for frontend (localhost:5173)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 

// Routes
app.use("/api", router);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Todo App is running!");
});

// Connect to DB and start server
connectDB()
  .then(() => {
    console.log("✅ DB connected successfully!");
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ DB connection failed:", error?.message);
  });
