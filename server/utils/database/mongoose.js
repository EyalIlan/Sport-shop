const mongoose = require('mongoose')


const MongooseConnect =  () =>{


    mongoose.connect(`mongodb+srv://${process.env.MongoName}:${process.env.MongoPassword}@cluster0.pzppprm.mongodb.net/?retryWrites=true&w=majority`)
    .then(() =>{
        console.log('Database Connected');
    })
    .catch(e =>{
        console.log('error');
        console.log(e);
    })
}

module.exports = {
    MongooseConnect
}