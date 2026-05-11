const {Router} = require('express')
const authmiddleware = require('../middlewares/authmiddleware')
const adminController = require('../controllers/admin.controller')
const adminmiddleware = require('../middlewares/adminmiddleware')

const adminRouter = Router()

adminRouter.get('/users',authmiddleware.authUser,adminmiddleware.adminUser,adminController.getAllUsersController)

adminRouter.get('/tasks',authmiddleware.authUser,adminmiddleware.adminUser,adminController.getAllTasksController)

adminRouter.delete('/:taskId',authmiddleware.authUser,adminmiddleware.adminUser,adminController.deleteAnyTaskController)

adminRouter.get('/stats',authmiddleware.authUser,adminmiddleware.adminUser,adminController.adminStatsController)

module.exports = adminRouter

