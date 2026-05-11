const express = require('express')
const cookieParser  =require('cookie-parser')
const authRouter= require('./routes/auth.route')
const taskRouter = require('./routes/task.route')
const adminRouter = require('./routes/admin.route')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use('/api/auth',authRouter)
app.use('/api/task',taskRouter)
app.use('/api/admin',adminRouter)

module.exports=app