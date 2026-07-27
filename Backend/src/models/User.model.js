import {Schema} from 'mongoose'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userschema = new Schema({
    name:{
        type:String,
        required:[true,"name field is Required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email field is Required"],
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password field is Required"],
        minLength:[6,"Minimum allowed Length for the password is 6"]
    },

    avatarURL:{
        type:String,
        default:null
    },

    role:{
        type:String,
        enum:['MEMBER','ADMIN','MODERATOR','OWNER'],
        default:"MEMBER"
    },

    isVerified:{
        type:Boolean,
        default:false
    }



},{timestamps:true})


userschema.pre("save",async function (){
    if(!this.isModified('password')){
        return;
    }
    const salt =  await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password,salt)
    
})

const User = mongoose.model("User",userschema);

export default User;    