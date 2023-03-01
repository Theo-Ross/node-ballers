import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

export const sequelize = new Sequelize(
  "players_db",
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
