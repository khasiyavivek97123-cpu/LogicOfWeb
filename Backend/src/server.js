import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./database/connectDB.js";

dotenv.config(); //load the Environment variables


const PORT = process.env.PORT || 5050


const startServer = async () => {


    connectDB()
        .then(() => {
            app.listen(PORT, () => {
                console.log("SERVER IS LISTENING AT PORT : ", PORT)
            })
        })
        .catch((err) => {
            console.log("Database Connection Failed : " + err.message)
            process.exit(1)
        })


}
startServer()