import mongoose from "mongoose";

const connectDb = async() => {
  try{
    const res = await mongoose.connect(process.env.MONGO_URI,{
      dbName:"authDb",
    })
    console.log("MongoDb connected!");
  }catch{
    console.log("Failed to connect");
  }
}

export default connectDb;
