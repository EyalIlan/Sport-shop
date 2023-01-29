
const User = require('../../models/user')
const Jwt = require('jsonwebtoken')

const Auth  = async(req,res,next) =>{
    
   try{

       const token = req.header('Authorization').replace('Bearer ','') 
       
      

       const decoded = Jwt.verify(token,process.env.TOKEN_PASSWORD) 
       
       const user = await User.findOne({_id:decoded._id,'tokens.token':token})
       console.log(user);
       
       if(!user){
           console.log('error');
           throw new Error()
        }
        
        req.user = user
        
        req.token = token
        next()
    }
   catch(e){
        console.log(e);
        res.status(401).json('Not Authenticate')
   } 
}

module.exports = {
    Auth
}