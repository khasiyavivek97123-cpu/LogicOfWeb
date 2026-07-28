import User from '../models/User.model.js'

export async function registerUserService({ name, email, password }) {

    if (!name || !email || !password) {
        throw new Error("All fields are required");
    }

    const userExists = await User.findOne({ email: email.trim().toLowerCase() })
    if (userExists) {
        throw new Error("User already exists");
    }

    const newUser = await User.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim()
    });

    return {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
    };

}


export async function loginUserService({email,password}){

    if ( !email || !password) {
        throw new Error("Email And Password Both Are Required");
    }
    email = email.trim().toLowerCase();

    const user = await User.findOne({email})

    if(!user){
        throw new Error("User Not Found!")
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        throw new Error("Invalid Credentials")
    }

    const token = user.generateToken()

    return {token,user}
}