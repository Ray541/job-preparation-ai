import dotenv from "dotenv";
import app from "./app.ts";
import connectToDB from "./config/database.ts";

dotenv.config();

connectToDB();

app.listen(3000, () => {
  console.log("Server running on port 5000 🚀");
});