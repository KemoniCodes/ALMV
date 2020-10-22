import React, { Fragment } from 'react';
import Product from '../components/Product';
import Arrow from '../images/arrow-down.png'
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Landing = () => {
    return (
        <Fragment>
            <div className='landing'>
                <h1 className='header-text'>ALMV</h1>

                <div className="image">
                    <img src={Arrow} alt="Down Arrow" />
                </div>
                <Product />
             
            </div>
        </Fragment>
    )
}

export default Landing
