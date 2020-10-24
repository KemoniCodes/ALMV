import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products';

const ProductScreen = ({ match }) => {

    return (
        <div className='product'>
            <h3 id='panel'>{}</h3>
        </div>
    )
}

export default ProductScreen
