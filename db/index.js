import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("players_db", "root", "TheoDOOR007", {
  host: "localhost",
  dialect: "mysql",
});
