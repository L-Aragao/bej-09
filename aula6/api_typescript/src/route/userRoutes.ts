import { Router } from "express";
import UserController from "../controller/userControllers"

const userRoutes = Router();
const userController = new UserController()

userRoutes.post("/users/user", userController.create)
userRoutes.get("/users/user", userController.read)

export default userRoutes;