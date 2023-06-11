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
    matchList:{
        type: Array,
        default:[],
        required:false,
        trim:true,
    }
});

const User = mongoose.model('User',userSchema)
export default User;

