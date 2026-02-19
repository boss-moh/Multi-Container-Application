import express, { type Response } from "express";
import { connectDB, PORT } from "./config";

const app = express();

app.get("/", (_, res: Response) => {
  res.json({ message: "Hello TypeScript API 🚀" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Access the API at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();
