
const mongoose = require('mongoose')
const Bycrypt = require('bcrypt')

const userSchame = mongoose.Schema({

    first_name:{
        type:String,
        required:true,
        validate(name){
            if (name.length <= 2){
                throw new Error('Name must be bigger then 2 charcters')
            }
        }
    },
    last_name:{
        type:String,
        required:true,
        validate(name){
            if (name.length <= 2){
                throw new Error('Name must be bigger then 2 charcters')
            }
        }
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
        validate(){
            // validate libary email
        }
    },
    age:{
        type:Number,
        required:false,
        validate(age){
            if(age < 10 || age > 120){
                throw new Error('Age must be postive number and lower then 120')
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
        uniq:true
    },
    address:{
        
        city:{
            type:String
        },
        home_address:{
            type:String
        }

    }


})

userSchame.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await Bycrypt.hash(this.password,8)
    }
    next()
})




const User = mongoose.model('user',userSchame)


module.exports = User