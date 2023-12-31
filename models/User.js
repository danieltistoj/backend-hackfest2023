import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        //select: false,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        undefined:true,
    },
    profilePhoto:{
        type:String,
        default: "",
        required:false,
        trim:true,
    },
    publicId:{
        type:String
    },
    matchList:{
        type: Array,
        default:[],
        required:false,
        trim:true,
    },
    phone:{
        type:String,
        default: "",
        required:false,
        trim:true,
    },
    rol:{
        type:String,
        default: "",
        required:true,
        trim:true,
    }
});

const User = mongoose.model('User',userSchema)
export default User;

