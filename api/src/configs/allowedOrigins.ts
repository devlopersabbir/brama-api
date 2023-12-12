import * as dotenv from "dotenv";
dotenv.config();
const allowedOrigins: Array<string> = [
  "http://localhost:3000",
  "https://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5173/",
  "www.localhost:5173/",
  "http://www.localhost:5173/",
];

export default allowedOrigins;
