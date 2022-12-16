import express from "express";
// import router from "./routes/player.js";
import bodyParser from "body-parser";
import { sequelize } from "./db/index.js";
import router from "./routes/players.js";

const app = express();
const port = process.env.PORT || 3001;

try {
  // Trying to connect to the MYSQL DB
  const result = await sequelize.sync();
  console.log(result);
} catch (error) {
  console.log(error);
}

app.use(bodyParser.json());
app.use("/players", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
