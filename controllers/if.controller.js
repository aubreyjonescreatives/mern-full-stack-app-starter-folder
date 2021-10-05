import { Product } from '../models/if.js'



export const postAddProduct = ((req, res) => {

const product = new Product({
    id: req.body.idCategory, 
    title: req.body.strCategory, 
    description: req.body.strCategoryDescription, 
    imageUrl: req.body.strCategoryThumb 
})
console.log(product)
product.save() //save method is provided by Mongoose
res.json(product)


})

export const getAllProducts = ((req, res) => {
    Product.find()
    .then(products => {
        res.json(products)
    })
    .catch(err => console.log(err))
})

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

export const getProductById = async (req, res) => {
    const prodId = req.body.productId
    console.log(prodId)
    try{
    const product = await Product.findById(prodId)
    if (!product) {
        return res.status(404).json({Message: 'Product Not Found'})
    }
    res.json(product)
} catch(err) {
    res.status(400).json({Message: `Invalid ID: ${err}`})
}
}

export const putEditProduct = async (req, res) => {
    const prodId = req.body.productId
    const updatedObj = {
        id: req.body.idCategory, 
        title: req.body.strCategory, 
        description: req.body.strCategoryDescription, 
        imageUrl: req.body.strCategoryThumb 
    } 
    try {
    const product = await Product.findByIdAndUpdate(prodId, updatedObj, {new: true})
        res.json(product)
    } catch(err) {
        res.status(400).json({Message: `Could not update: ${err}`})
    }


}

export const deleteProduct = async (req, res) => {
    const prodId = req.body.productId 
    try {
        const deletedProduct = await Product.findByIdAndRemove(prodId)
            if (!deletedProduct) {
               return res.status(400).json({Message: `Product to Delete Not Found.`})
            }
            console.log(`Deleted the product ${deletedProduct}`)
            res.redirect(`/`)
        } catch (err) {
            res.status(400).json({Message: `Invalid ID: ${err}`})
        }

    }
    