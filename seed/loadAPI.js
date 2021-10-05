import axios from 'axios'; 
import { Product } from '../models/if.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'



dotenv.config()

const seedMongo = async () => {
    await mongoose.connect(`${process.env.DB_CONN_STRING}`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })


    const options = {
        method: 'GET', 
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php', 
      //  params: {}, 
      //  headers: {'access-token': process.env.SUPERHERO_API_KEY}
    } 
    try {
        const response = await axios.request(options)
        console.log(response.data.categories)
      // await addCard(response.data.cards[0])
       await addProducts(response.data.categories)
        await mongoose.connection.close() 
    } catch (error) {
        console.error(error)
    }

}




const addProduct = async (oneProduct) => {

    const products = new Product({
        id: oneProduct.idCategory, 
        title: oneProduct.strCategory, 
        description: oneProduct.strCategoryDescription, 
        imageUrl: oneProduct.strCategoryThumb 
        
    })
   await products.save() //save method is provided by Mongoose
   console.log('Added successfully')
    
    
    }

    const addProducts = async (productList) => {
        for (let product of productList) {
            console.log(product)
            await addProduct(product)
        }
    }

    seedMongo()
    