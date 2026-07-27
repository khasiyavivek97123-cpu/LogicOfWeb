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