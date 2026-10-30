
import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://indhumathipalani3_db_user:Hav64uQApwdlLNbX@cluster0.w7eb4lg.mongodb.net/Expense").then(()=>console.log("DB Connected"));
    
}