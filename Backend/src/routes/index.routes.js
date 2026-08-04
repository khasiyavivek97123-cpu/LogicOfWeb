import { Router } from "express";
import authRouter from "./auth.routes.js";
import userRouter from './user.routes.js'
import workspaceRouter from "./workspace.routes.js";

const indexRouter = Router();

indexRouter.use('/auth',authRouter)
indexRouter.use('/user',userRouter)
indexRouter.use("/workspaces", workspaceRouter);



indexRouter.get("/",(req,res)=>{

    return res.status(200).json({
        sucess:true,
        message:"TaskFlow api is running",
        error:null,
        data:null
    })
})


export default indexRouter