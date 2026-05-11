const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','completed'],
        default:'pending'
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'low'
    },
    category:{
        type:String,
        enum:['work','personal','study','other'],
        default:'other'
    },
    dueDate:{
        type:Date,
        required:true
    },
    user:{  
       type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},  {
        timestamps:true
    })

    const taskModel = mongoose.model('task',taskSchema)

module.exports = taskModel