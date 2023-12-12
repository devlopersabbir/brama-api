import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { corsOptions } from "./configs";
import { postRoute } from "./routes";
import path from "path";

const app = express();

app.use(cors(corsOptions));
app.use(fileUpload());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(morgan("dev"));

app.use("/api/v1/posts", postRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 4000;
AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server running....");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
