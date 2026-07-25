import {Schema} from 'mongoose'

const userschema = new Schema({
    name:{
        type:String,
        require:[true,"name field is Required"],
        trim:true
    },
    email:{
        type:String,
        require:[true,"email field is Required"],
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        require:[true,"password field is Required"],
        minLength:[6,"Minimum allowed Length for the password is 6"]
    },

    avatar:{
        type:URL,
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


const User = model("User",userschema);

export default User;    