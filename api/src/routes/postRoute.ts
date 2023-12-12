import { Router } from "express";
import PostController from "../controllers/PostController";

const routes = Router();

routes.get("/", PostController.index);
routes.post("/", PostController.store);

export default routes;
