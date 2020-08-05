import express from "express";

import ClassesController from "./controllers/ClassesController";

const routes = express.Router();

routes.post("/classes", ClassesController.store);

export default routes;
