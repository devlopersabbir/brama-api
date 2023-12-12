import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity";
import DB from "./configs/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB.PGHOST,
  port: 5432,
  username: DB.PGUSER,
  password: DB.PGPASSWORD,
  database: DB.PGDATABASE,
  synchronize: true,
  logging: false,
  ssl: true,
  entities: [Post],
});
