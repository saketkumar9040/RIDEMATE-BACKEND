import mongoose from "mongoose";

const connectDB = async() => {
    try{
      const connection = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      });
      console.log(`Mongo DB connected : ${connection.connection.host}`)
    }catch(error){
        throw new Error(error.message)
    }
};

export default connectDB;