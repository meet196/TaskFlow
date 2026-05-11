const userModel = require('../models/user.model')
const taskModel = require('../models/task.model')

async function getAllUsersController(req,res) {
    
    const users = await userModel.find()
    res.status(200).json({
        message:'All Users Data Fetched Successfully',
        users
    })
}

async function getAllTasksController(req,res) {

    const tasks = await taskModel.find()
    res.status(200).json({
        message:'All Users Task Fetched Successfully',
        tasks
    })
}

async function deleteAnyTaskController(req, res) {
    const { taskId } = req.params

    const deletedTask = await taskModel.findByIdAndDelete(taskId)

    if (!deletedTask) {
        return res.status(404).json({
            message: 'Task Not Found'
        })
    }

    res.status(200).json({
        message: 'Task Deleted Successfully',
        task: deletedTask
    })
}

async function adminStatsController(req,res) {
    const totalUsers = await userModel.countDocuments()
    const totalTasks = await taskModel.countDocuments()
    const pendingTasks = await taskModel.countDocuments({ status: 'pending' })
    const completedTasks = await taskModel.countDocuments({ status: 'completed' })

    res.status(200).json({
        message: 'Admin stats fetched successfully',
        stats: {
            totalUsers,
            totalTasks,
            pendingTasks,
            completedTasks
        }
    })
}

module.exports = {getAllUsersController, getAllTasksController , deleteAnyTaskController , adminStatsController }