
const mongoose = require('mongoose')
const Bycrypt = require('bcrypt')
const Validator = require('validator')

const userSchame = mongoose.Schema({

    name:{
        type:String,
        required:true
   },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password must be longer then 6 and dont contain the word password')
            }
        }
    },
    email:{
        type:String,
        required:true,
        uniq:true,
        validate(email){
          if(!Validator.isEmail(email)){
            throw new Error('Must be a proper email')
          }
        }
    },
    role:{
        type:String,
        default:'user'      
    },
   tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    phone:{
        type:String,
        required:false,
        validate(phone){
            if(!Validator.isMobilePhone(phone)){
                throw new Error('must be a proper phone')
            }
        }
    },
    imageUrl:{
        type:String,
        required:false
    }
    // address:{
        
    //     city:{
    //         type:String
    //     },
    //     home_address:{
    //         type:String
    //     }

    // }


})

userSchame.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await Bycrypt.hash(this.password,8)
    }
    next()
},{timestamps:true})




const User = mongoose.model('User',userSchame)


module.exports = User