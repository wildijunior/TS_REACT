import Router from "express";

import UsersController from "./controllers/UserController";
const routes = Router();

routes.get("/users", UsersController.index);
routes.post("/users", UsersController.create);

export default routes;
