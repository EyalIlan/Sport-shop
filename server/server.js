const express = require('express')
const app = express()
require('dotenv').config()
const MongoDB = require('./utils/database/mongoose')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/user')
const ProductRoute = require('./routes/product')
//



app.use('/',AuthRoute)
app.use('/user',UserRoute)
app.use('/product',ProductRoute)

app.use((error,req,res,next) =>{

    if(error){
        let message = error.message
        res.json(message)
    }
    next()
})


//////
MongoDB.MongooseConnect()

app.listen(process.env.PORT || 5000 ,() =>{
    console.log(`Server Running on port ${process.env.PORT} && ${process.env.NODE_ENV}`);
})
