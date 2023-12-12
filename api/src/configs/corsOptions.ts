import { CorsOptions } from "cors";
import allowedOrigins from "./allowedOrigins";

const corsOptions: CorsOptions = {
  origin(requestOrigin, callback) {
    if (!requestOrigin) {
      callback(null, true);
    } else {
      if (allowedOrigins.indexOf(requestOrigin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
