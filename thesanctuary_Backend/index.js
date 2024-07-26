import express from "express";
import cors from "cors";
import { indexRouter } from "./router/index.js";
import { sequelize } from "./db/connectionDB.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

indexRouter(app);

async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDB();
