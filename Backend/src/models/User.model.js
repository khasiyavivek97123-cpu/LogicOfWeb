import { Schema } from 'mongoose'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userschema = new Schema({
    name: {
        type: String,
        required: [true, "name field is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email field is Required"],
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "password field is Required"],
        minLength: [6, "Minimum allowed Length for the password is 6"]
    },

    avatarURL: {
        type: String,
        default: null
    },

    role: {
        type: String,
        enum: ['MEMBER', 'ADMIN', 'MODERATOR', 'OWNER'],
        default: "MEMBER"
    },

    isVerified: {
        type: Boolean,
        default: false
    },
    currentWorkspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        default: null,
    },



}, { timestamps: true })


userschema.pre("save", async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt)

})


userschema.methods.comparePassword = async function (enteredPassword) {

    const isMatched = await bcrypt.compare(enteredPassword, this.password)

    return isMatched
}


userschema.methods.generateToken = function () {

    const payload = {
        userId: this._id,
        email: this.email,
        role: this.role
    }

    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
    })

    return token

}

const User = mongoose.model("User", userschema);

export default User;    