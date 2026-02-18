import express, { type Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res: Response) => {
  res.json({ message: "Hello TypeScript API 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});
