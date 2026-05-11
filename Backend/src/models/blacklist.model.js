const mongoose = require('mongoose')

const tokenblackListSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
},{
    timestamps:true  
}
)

const tokenblackListModel = mongoose.model('tokenblackList',tokenblackListSchema)

module.exports = tokenblackListModel