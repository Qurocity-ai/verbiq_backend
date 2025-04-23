import mongoose from 'mongoose';

const connecttoDB = async()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/verbiQ")
    console.log('connected to db');
} 

export default connecttoDB;