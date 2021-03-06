import {Router} from 'express'

export const productRouter = Router()

import { postAddProduct, getAllProducts, getProducts, getProductById, putEditProduct, deleteProduct } from '../controllers/if.controller.js'
import { Product } from '../models/if.js'

productRouter.post('/', postAddProduct)

productRouter.get('/', getAllProducts)

productRouter.get('/async', getProducts)

productRouter.get('/id', getProductById)


productRouter.put('/update', putEditProduct)


productRouter.delete('/delete', deleteProduct)
