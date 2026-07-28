import { registerUserService, loginUserService } from "../services/auth.services.js"



export const registerUser = async (req, res) => {

    try {

        const { email, name, password } = req.body

        const user = await registerUserService({ email, name, password })

        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: user
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        

        const { token, user } = await loginUserService({ email, password })

        const responseUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        };

        return res.status(200).json({
            success: true,
            message: "User Login Successfully",
            data: responseUser,
            token
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
