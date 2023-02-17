



const ErrorHandler = (error,req,res,next) =>{

    console.log('error handling');

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        
            res.status(error.statusCode).json({
                success:false,
                error:error,
                errorMessage:error.message,
                stack:error.stack
            })

    }

    if(process.env.NODE_ENV === 'PRODUCTION'){

        res.json(error.statusCode).json({
            success:false,
            errorMessage:error.message
        })

    }
    next()
} 


module.exports = {
    ErrorHandler
}