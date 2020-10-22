import React from 'react'
// import products from '../products'

const Product = ({ product }) => {
    console.log(product.jacket[0].images[0])
    return (
        <div>
            <a href={`/product/${product._id}`}></a>
            {/* <img src={product.shoes[1].images[2].image3} alt="" /> */}
        </div>
    )
}

export default Product
