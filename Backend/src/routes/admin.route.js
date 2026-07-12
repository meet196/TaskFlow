const {Router} = require('express')
const {authUser} = require('../middlewares/authmiddleware')
const adminController = require('../controllers/admin.controller')
const {adminUser} = require('../middlewares/adminmiddleware')

const adminRouter = Router()

adminRouter.get('/users',authUser,adminUser,adminController.getAllUsersController)

adminRouter.get('/tasks',authUser,adminUser,adminController.getAllTasksController)

adminRouter.delete('/tasks/:taskId',authUser,adminUser,adminController.deleteAnyTaskController)

adminRouter.get('/stats',authUser,adminUser,adminController.adminStatsController)

module.exports = adminRouter

