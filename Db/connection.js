import mongoose from "mongoose";

const conn = async (db_url)=>{
    try {
        const db_option = {
            dbName : "Timer"
        }

        await mongoose.connect(db_url,db_option);
        console.log("connection successfully")
    } catch (error) {
        console.log(error)
    }
}

export default conn;