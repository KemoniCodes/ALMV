import React from 'react'
import products from '../products'

const Product = ({ product }) => {
    console.log(products)

    return (
        <div>
            {/* <a href={`/product/${product.id}`}>
                <img src={product.images} alt="" />
            </a> */}
        </div>
    )
}

export default Product
