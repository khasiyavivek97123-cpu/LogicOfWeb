import { registerUserService } from "../services/auth.services.js"



export const registerUser = async (req,res)=>{

    try {
        
        const {email,name,password} = req.body

        const user = await registerUserService({email,name,password})

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
