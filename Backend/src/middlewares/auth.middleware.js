import jwt from 'jsonwebtoken'
import User from '../models/User.model.js';

export const verifyJWT = async (req, res, next) => {

    try {

        const token = req.cookies?.accessToken;


        if (!token) {
            throw new Error("Unauthorized")
        }

        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET   )

        const user = await User.findById(payload.userId).select("-password")

        if (!user) {
            throw new Error("User Not Found")
        }

        req.user = user;
        next();
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }



}