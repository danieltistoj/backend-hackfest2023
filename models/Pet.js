import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const petSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    profilePhoto:{
        type:String
    },
    publicId:{
        type:String
    },
    race:{
        type:String,
        required:true,
        trim:true,
    },
    age:{
        type: String,
        required:true,
        trim:true,
    },
    sex:{
        type:Number,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:false,
        trim:true,
    },
});

const Pet = mongoose.model('Pet',petSchema)
export default Pet;

