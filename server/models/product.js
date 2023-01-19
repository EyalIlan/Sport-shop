const mongoose = require('mongoose')



const productSchema = mongoose.mongoose({


    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('product price cant be negitive number')
            }
        }
    },
    //quentity -> number of the product avauible
    qyt:{
        type:Number,
        required:false,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('the number the product has is in the shop cant be lower then 0')
            }
        }
    },
    category:{
        type:String,
        required:true,
    },
    
    imageUrl:{
        type:String,
        required:false
    }
})

const Product = mongoose.model('product',productSchema)


module.exports = Product