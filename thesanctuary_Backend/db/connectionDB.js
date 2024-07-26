import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: "postgres://postgres:postgres@database:5432/postgres",
  // models: [User],
});
