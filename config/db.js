import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async ()=>{
    try{
        const todoDB = await mongoose.connect(process.env.MONGO_URI)
        console.log(todoDB.connection.host)
    }catch{
        console.error(error?.message)
    }

}

export default connectDB