function adminUser(req,res,next) {
    
    if(req.user.role !=="admin"){
        return res.status(403).json({
            message:'Access Denined(Admin Only)'
        })
    }
    next()
}

module.exports = {adminUser}