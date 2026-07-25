import { Router } from "express";


const indexRouter = Router();


indexRouter.get("/",(req,res)=>{

    return res.status(200).json({
        sucess:true,
        message:"TaskFlow api is running",
        error:null,
        data:null
    })
})


export default indexRouter