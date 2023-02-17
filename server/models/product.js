const Mongoose = require('mongoose')



const productSchema = Mongoose.Schema({


    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    price:{
        type:Number,
        required:true,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('product price cant be negitive number')
            }
        }
    },

    description:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        default:0,
        required:false
    },

    imagesUrl:[
        {
            url:{
                type:String,
                required:true
            }
        }
    ],
      
    //quentity -> number of the product avauible
    quentity:{
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
        required:true
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const Product = Mongoose.model('Product',productSchema)


module.exports = Product