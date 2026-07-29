import User from "../models/User.model.js";

export const getProfile = async (req, res) => {
    try {

        const user = req.user

        return res.status(200).json({
            success: true,
            message: "User Profile Fetched Successfully",
            data: user
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}