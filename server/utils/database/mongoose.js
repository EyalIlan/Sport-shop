const Mongoose = require('mongoose')



Mongoose.set({"strictQuery":false})

const MongooseConnect =  () =>{


    Mongoose.connect(process.env.DATABASE_URL).then(() =>{
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