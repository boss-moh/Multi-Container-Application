import { connectDB } from "./DB";

const MONGO_URL = process.env.MONGO_URL || "";
const PORT = process.env.PORT || "5000";

export { PORT, MONGO_URL, connectDB };
