const { findOne } = require('../models/user')
const User = require('../models/user')
const Bycrypt = require('bcrypt')
const Jwt = require('jsonwebtoken')

const Login = async(req,res) =>{

    const {password,email} = req.body

    try{
      
         const user = findOne({email:email})   

         if(!user){
            throw new Error('Unable to connect')
         }

         const isMatch = await  Bycrypt.compare(password,user.password)

         if(!isMatch){
            throw new Error('Unable to connect')
         }
         const token = Jwt.sign({_id:user._id.toString()},process.env.TOKEN_PASSWORD,{expiresIn:"1d"})
         user.tokens = user.tokens.concat({token})
         await user.save()

         res.status(200).json({user,token})
    }
    catch(e){
        console.log(e);
        res.status(500).json(e)
    }
}

const LogOut = async() =>{

    
    req.user.tokens = []
    try{
        req.user.save()
        res.status(200).json('user logout')
    }
    catch(e){
        console.log(e);
        res.status(500).json('cant logout from user account')
    }
}

module.exports ={
    Login,
    LogOut
}