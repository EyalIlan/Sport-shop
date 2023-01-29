

const Admin = (req,res,next) =>{

    const role = req.user.role

    if(role !== 'admin'){
        throw new Error('cant commit request')
    }
    next()
}


module.exports = {
    Admin
}