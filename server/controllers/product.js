
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
 
    const productValues = req.body
    const product = new Product(productValues)
    try{
       await product.save()
       res.status(201).json('The product has created')
    }
    catch(e){
        console.log(e);
        res.status(500).json('cant create product')
    }

}

const updateProduct = async(req,res) =>{

    const {id} = req.params 
    const editValues  = req.body

    try{
        const product = await Product.findByIdAndUpdate(id,editValues)
        res.status(200).json(product)
    }
    catch(e){
        console.log(e);
        res.status(500).json('cant update product')
    }

}


const deleteProduct = async(req,res) =>{


}

const getSpecificProduct = async(req,res) =>{

    const Id = req.params.id

    try{
        const product = await Product.findById(Id)
        res.status(200).json(product)
    }
    catch(e){
        console.log(e);
        res.status(500).json(e)
    }

}


module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSpecificProduct
}