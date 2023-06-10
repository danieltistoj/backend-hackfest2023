import mongoose from "mongoose";
import {config} from "../config/default.js"

const connectMongoDB = async () =>{
    try{
        //console.log("uri",process.env.MONGO_URI)
        const connection = await mongoose.connect(config.db.mongo_uri,{
            useNewUrlParser: true,
            retryWrites: true,
            w: "majority",
        })
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Mongo connected in: ${url}`)
    }catch(error){
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB