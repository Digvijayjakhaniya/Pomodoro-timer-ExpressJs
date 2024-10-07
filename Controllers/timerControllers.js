import timerModel from "../Models/timerModel.js";

class timerController {

    static start = async (req,res)=>{
        try {
            res.redirect("/")
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static stop = async (req,res)=>{
        try {
            
            res.redirect("/")
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static select_task = async (req,res)=>{
        try {
            await timerModel.findByIdAndUpdate(req.params.id,{status:"Current"})
            res.redirect('/')
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static update_task = async(req,res) =>{
        const { status } = req.body;
        await timerModel.findOneAndUpdate({status:"Current"}, { status }, { new: true });
    }

    static index = async (req,res) =>{
        try {
            const Current_task = await timerModel.find({status:"Current"})
            const Pending_task = await timerModel.find({status:"Pending"})
            const Complete_task = await timerModel.find({status:"Completed"})
            
            res.render('index',{title:'Home',Pending_task,Current_task,Complete_task})
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static create = async (req,res) =>{
        try {
            const task_list = await timerModel.find()
            res.render('tasks/create',{title:'create',task_list})
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static store = async(req,res)=>{
        try {
            const {task_name} = req.body
            const task = new timerModel({
                task_name:task_name,
                status:"Pending"
            })
            await task.save()
            res.redirect("tasks/create")
        } catch (error) {
            console.log(error)
            res.redirect("tasks/create")
        }
    }

    static edit = async (req,res) =>{
        try {
            const taskData = await timerModel.findById(req.params.id)
            res.render('tasks/edit',{title:'update task',taskData})
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static update = async (req,res) =>{
        try {
            await timerModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/tasks/create')
        } catch (error) {
            console.log(error)
            res.redirect("/")
        }
    }

    static delete = async (req,res) =>{
        try {
            await timerModel.findByIdAndDelete(req.params.id)
            res.redirect('/tasks/create')
        } catch (error) {
            console.log(error)
            res.redirect("/")
        }
    }
}

export default timerController;