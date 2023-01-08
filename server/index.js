const express = require('express')
const app = express()
require('dotenv').config()
const Mongoose = require('./utils/mongoose/mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//



// Mongoose.MongooseConnect()

app.listen(5000 ,() =>{
    console.log(`Server Running on port ${process.env.PORT}`);
})
