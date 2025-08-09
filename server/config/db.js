import mongoose from "mongoose";

// connect with mongodb

const connectDB = async () => 
{
    mongoose.connection.on('connected', () => console.log('Database Connected'))
    await mongoose.connect(`${process.env.MONGODM_URI}/job-portal`)

}

export default connectDB