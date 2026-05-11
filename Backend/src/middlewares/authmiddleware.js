const jwt= require('jsonwebtoken')
const tokenblackListModel = require('../models/blacklist.model')

async function authUser(req,res,next) {
   const token = req.cookies.token
   if(!token){
    return res.status(401).json({
        message:'token is missing'
    })
   }
   const tokenblackList = await tokenblackListModel.findOne({token})
   if(tokenblackList){
    return res.status(401).json({
        message:'token is invalid'
    })
   }
    try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = decoded
    
    next()
    
    } catch (error) {
            res.status(401).json({
                message:'Invalid Token'
            })
    }
}

module.exports = {authUser}