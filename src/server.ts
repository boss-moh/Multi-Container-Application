import express, { type Response } from "express";
import { PORT } from "./config";

const app = express();

app.get("/", (_, res: Response) => {
  res.json({ message: "Hello TypeScript API 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});
