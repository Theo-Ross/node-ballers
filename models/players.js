import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Player = sequelize.define(
  //
  "player",
  {
    // setting up columns
    //- primary key
    //- column types
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    second_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    team: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nationality: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
  },
  // renaming the auto generated columns
  {
    updatedAt: "updated_at",
    createdAt: "date_created",
  }
);
