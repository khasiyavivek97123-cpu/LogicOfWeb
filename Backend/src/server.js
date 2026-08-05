import dotenv from 'dotenv'
dotenv.config()

import app from "./app.js";
import connectDB from "./database/connectDB.js";


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