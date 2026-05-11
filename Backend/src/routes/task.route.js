const {Router} = require('express')
const taskController = require('../controllers/task.controller')
const authmiddleware = require('../middlewares/authmiddleware')

const taskRouter = Router()

//Create Task
taskRouter.post('/create',authmiddleware.authUser,taskController.createTaskController)

//GetAll Task
taskRouter.get('/all',authmiddleware.authUser,taskController.getAllTaskController)

//All TasksList
taskRouter.get('/stats',authmiddleware.authUser,taskController.dashboardStatsController)

//Single Tasklist
taskRouter.get('/:taskId',authmiddleware.authUser,taskController.singleTaskController)

//Updated Task
taskRouter.put('/:taskId',authmiddleware.authUser,taskController.updateTaskController)

//Deleted Task
taskRouter.delete('/:taskId',authmiddleware.authUser,taskController.deletedTaskController)

module.exports = taskRouter