import { Router } from "express";
import PostController from "../controllers/PostController";

const routes = Router();

routes.post("/get", PostController.index);

export default routes;
