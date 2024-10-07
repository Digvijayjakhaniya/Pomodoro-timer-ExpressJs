import mongoose from "mongoose";

const timerSchema = new mongoose.Schema({
    task_name:{type:String,required:true},
    status:{type:String,require:true}
})

const timerModel = mongoose.model("tasks",timerSchema)

export default timerModel;