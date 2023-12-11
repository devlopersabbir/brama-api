import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  // username: "nullxwtl_astrology",
  username: "root",
  // password: "5DkIy^r{Mf)b",
  password: "",
  // database: "nullxwtl_astrology",
  database: "nahid",
  synchronize: true,
  logging: false,
  entities: [Post],
});
