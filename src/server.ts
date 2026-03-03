import routes from "@/routes";
import express from "express";
import { connectDB, PORT } from "@/config/index";

import { errorHandler } from "./middleware";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Access the API at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
