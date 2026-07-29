import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import indexRouter from "./routes/index.routes.js";


const app = express();
const corsOptions = {
    origin:process.env.CLIENT_URL || "http://localhost:5173",
    credentials:true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],

}

//global routes

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors(corsOptions))

//local routes

app.use("/api",indexRouter)


//global routes
app.use((req,res)=>{
    res.status(404).json({
        success : false,
        message:`The Backend Route ${req.originalUrl} Does Not Exist`,
        data:null,
        error:null
    })
})

export default app
