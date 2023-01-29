const User = require('../models/user')


const  getUsers = async(req,res) =>{

    try{
        const users = await User.find({})
        res.status(200).json(users)
    }
    catch(e){
        console.log(e);
        res.status(500).json('cant get the users')
    }
}

const editUser = async(req,res) =>{

    console.log('in update user');
    try{
    const user = req.user
    Object.keys(req.body).forEach(update =>{
        user[update] = req.body[update]
    })

    await user.save()
    res.status(201).json('user updated')
}
catch(e){}

    console.log(e);
    res.json(500).json('Unable to edit user')

}

const deleteUser = async(req,res) =>{

    try{
        await User.findByIdAndDelete(req.user._id)
        res.status(200).json('user deleted')
    }
    catch(e){
        console.log(e);
        res.status(500).json('Unable to delete user')
    }
}

const createUser = async(req,res) =>{

    console.log();

    // LATER!
    // const user = req.user

    // Object.keys(req.body).forEach(update =>{
    //     user[update] = req.body[update]
    // })

    const user = new User(req.body)


    try{
       // later add image 
       await user.save()
       res.status(201).json('User has created')
    }
    catch(e){
        console.log(e);
        res.status(500).json('cant create user')
    }
}


module.exports = {
    getUsers,
    editUser,
    deleteUser,
    createUser
}