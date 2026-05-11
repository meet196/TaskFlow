const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenblackListModel = require('../models/blacklist.model')

async function registerUserController(req, res) {
    
    const{name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(400).json({
            message:'All fields are Required'
        })
    }

    if (password.length < 8) {
    return res.status(400).json({
        message: "Password must be at least 8 characters long"
    })
}

    const isUserAlreadyExist = await userModel.findOne({email})
    if(isUserAlreadyExist){
        return res.status(400).json({
            message:'User Already Exist'
        })
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const user = await userModel.create({
        name,
        email,
        password : hashedPassword
    })
    

    res.status(201).json({
        message:'User Register Successfully',
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })
}
async function loginUserController(req, res) {
    
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message:'All Fields Required'
        })
    }

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({
            message:'Invalid Email or Password'
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
        return res.status(400).json({
            message:'Invalid Email or Password'
        })
    }
    const token = jwt.sign(
        {
        id:user._id,
        email:user.email,
        role:user.role
        },
        process.env.JWT_SECRET,
        { expiresIn:"1d"}
    )
    res.cookie('token',token)
    res.status(200).json({
        message:'Successfully Login',
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })

}
async function logoutUserController(req, res) {
    const token = req.cookies.token

    if(token){
        await tokenblackListModel.create({token})
    }
    
    res.clearCookie("token")
    res.status(200).json({
        message:'Logout Successfully'
    })
}
async function getMeController(req,res) {
    
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message:"Detail Feteched Successfull",
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })
    

}

module.exports= { registerUserController , loginUserController , logoutUserController , getMeController}