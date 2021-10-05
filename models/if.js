import mongoose from 'mongoose'


const Schema = mongoose.Schema 


const productSchema = new Schema({
    id: {
        type: Number, 
        required: true
    }, 
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true 
    }, 
    imageUrl: {
        type: String, 
        required: true 
    }
})

export const Product = mongoose.model('Product', productSchema)