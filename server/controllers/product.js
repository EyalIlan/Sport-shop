
const Product  = require('../models/product')



//User
const getProducts = async(req,res) =>{

    const findTerms = req.query
    
    try{
        const products = await Product.find(findTerms)
        res.status(200).json(products)
    }
    catch(e){
        console.log(e);
        res.status(500).json('problem retreving products')
    }
}


const createProduct = async(req,res) =>{
 
    
}

const updateProduct = async(req,res) =>{

}


const deleteProduct = async(req,res) =>{

}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}