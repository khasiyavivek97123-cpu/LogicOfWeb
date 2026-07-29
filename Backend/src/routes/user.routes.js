import { Router } from "express";
import { getProfile } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router()


userRouter.get('/profile',verifyJWT,getProfile)


export default userRouter

