import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as dotenv from 'dotenv'



dotenv.config()
const port = process.env.PORT || 3000


const PopularProducts = () => {
    const [productData, setProductData] = useState([])



    const fetchProducts = async () => {
        try {
        const popularproductsInfo = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php/`)
        setProductData(popularproductsInfo.data.categories)
        console.log(popularproductsInfo.data.categories)
        } catch (err) {
            console.log(err)
        }
        }
        
        
        useEffect(() => {
            fetchProducts()
           
        }, [])



        return (
            <>
            {productData.map((product) => {
                return (
                 <h1>{product.strCategory}</h1>


                )


            })}

            </>
        );




}



export default PopularProducts


