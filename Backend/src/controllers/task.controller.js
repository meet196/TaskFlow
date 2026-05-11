const taskModel = require('../models/task.model')

async function createTaskController(req,res) {

    const { title, description, dueDate, status, priority, category} = req.body

        if(!title ||!description ||!dueDate){
            return res.status(400).json({
                message:'all fields required'
            })
        }
        const user = req.user.id
        const task = await taskModel.create({ title, description, dueDate, status, priority, category,user})
        res.status(201).json({
            message:'task created successfully',
            task
        })
}

async function getAllTaskController(req,res) {
    const user = req.user.id

    const tasks = await taskModel.find({user})

    res.status(200).json({
        message:'all task fetched successfully',
        tasks
    })
}   

async function singleTaskController(req,res) {
    const {taskId} = req.params
    const user = req.user.id

    const task = await taskModel.findOne({_id:taskId,user})
    if(!task){
        return res.status(401).json({
            message:'Task Not Found'
        })
    }
    res.status(200).json({
        message:'Task Fetched Successfully',
        task
    })
}
async function updateTaskController(req,res) {
    const{taskId} = req.params
    const user = req.user.id
    const updatedTask = await taskModel.findOneAndUpdate({_id:taskId,user},req.body,{new:true})
    if(!updatedTask){
        return res.status(404).json({
            message:"task not found"
        })
    }
    res.status(200).json({
        message:'Task updated successfully',
        task: updatedTask
    })
}
async function deletedTaskController(req,res) {
    const {taskId} = req.params
    const user = req.user.id

    const deletedTask = await taskModel.findOneAndDelete({_id:taskId,user})
    if(!deletedTask){
        return res.status(404).json({
            message:'TAsk Not Found'
        })
    }

    res.status(200).json({
        message:'Task Deleted Successfully',
        task:deletedTask
    })
}
async function dashboardStatsController(req,res) {
    const user = req.user.id
    const totalTasks = await taskModel.countDocuments({user})
    const pendingTasks = await taskModel.countDocuments({user,status:'pending'})
    const completedTasks = await taskModel.countDocuments({user,status:'completed'})

    res.status(200).json({
        message: 'Dashboard stats fetched successfully',
        stats: {
            totalTasks,
            pendingTasks,
            completedTasks,
        }
    })
}
module.exports = {createTaskController, getAllTaskController, singleTaskController, updateTaskController, deletedTaskController, dashboardStatsController }