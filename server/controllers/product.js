
const Product  = require('../models/product')
const {filterQuery} = require('../utils/functions/request')


const getProducts = async(req,res) =>{

    const query = filterQuery(req.query)


    try{
        const products = await Product.find(query).skip(req.query.page*20).limit(20)
        res.status(200).json({count:products.length,products})
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

    const {id} = req.params

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"product has deleted"})
    }
    catch(e){
        console.log(e);
        res.status(500).json({success:false,message:"can't delete product"})
    }
}

const getSpecificProduct = async(req,res) =>{

    const Id = req.params.id

    try{
        const product = await Product.findById(Id)

        if (!product) {
          return res.status(404).json('cant get product')
        }

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