const express = require('express')
const app = express()
require('dotenv').config()
const MongoDB = require('./utils/database/mongoose')

// Routes
const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/user')
const ProductRoute = require('./routes/product')
//
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// app.use('/',AuthRoute)
app.use('/user',UserRoute)
// app.use('/product',ProductRoute)


//////
MongoDB.MongooseConnect()

app.listen(5000 ,() =>{
    console.log(`Server Running on port ${process.env.PORT}`);
})
