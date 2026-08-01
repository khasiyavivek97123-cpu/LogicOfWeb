import { Router } from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router()


userRouter.get('/me',verifyJWT,getCurrentUser)


export default userRouter

