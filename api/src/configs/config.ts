import * as dotenv from "dotenv";
dotenv.config();
export default {
  PGHOST: process.env.PGHOST || "",
  PGDATABASE: process.env.PGDATABASE || "",
  PGUSER: process.env.PGUSER || "",
  PGPASSWORD: process.env.PGPASSWORD || "",
};
