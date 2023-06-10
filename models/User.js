import mongoose from 'mongoose';

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
});

export default mongoose.model('User', userSchema);
