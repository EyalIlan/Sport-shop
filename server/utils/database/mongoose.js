const Mongoose = require('mongoose')



Mongoose.set({"strictQuery":false})

const MongooseConnect =  () =>{


    Mongoose.connect(`mongodb+srv://John:W9zk85qGSYDg8X12@cluster0.pzppprm.mongodb.net/shop`).then(() =>{
        console.log('database connected Yey! :) :) :) :) :)');
    })
    .catch(e =>{
        console.log('error');
        console.log(e);
    })
}

module.exports = {
    MongooseConnect
}