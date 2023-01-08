
const mongoose = require('mongoose')


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
    }


})