import React, { Fragment } from 'react';
// import image from '../images/jacket 4/3.jpg';
// import image2 from '../images/jeans 4/3.jpg';
// import image3 from '../images/shoe 2/3.jpg';
// import image4 from '../images/bag 1/2.jpg';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product'
import arrow from '../images/diagnol-arrow.png'

const Panel = () => {
    return (
        <Fragment>
            <div className='panel'>

                {products.map(product => (
                    <ul className='panel-images'>
                        <img src={product.jacket[0].images[0].image1} />
                        <img src={product.dress[0].images[0].image1} />
                        <img src={product.jeans[1].images[0].image1} />
                        <img src={product.skirt[1].images[0].image1} />
                    </ul>
                ))}

                <h2 className='header-text'>New In</h2>

                <div className="collection">
                    <div className="row">
                        <h3>F/W 20’/21’</h3>
                        <h4><img src={arrow} alt='Arrow' />See Full Collection</h4>
                        <p>
                            This F/W we expressed our fave neutrals with bold and striking refinements —ALMV.
                            I always loved aesthetics. Not particularly fashion, but an idea of beauty. I think I’d go mad if I didn’t have a place to escape to. You have to stay true to your heritage; that’s what your brand is about. Fashion is made to become unfashionable. A practice. If you do this, something will change, what will change is that you will change, your life will change, and if you can change you, you can perhaps change the world.  Age and size are only numbers. It’s the attitude you bring to clothes that make the difference. I always loved aesthetics. Not particularly fashion, but an idea of beauty. All I did my first year at Vogue was Xerox. Design is a constant challenge to balance comfort with luxe, the practical with the desirable. It’s a philosophy of life.
                        </p>
                    </div>
                    <div className="image">
                        {products.map(product => (
                            <ul>
                                <img src={product.jacket[3].images[2].image3} alt="product" />
                                <img src={product.jeans[3].images[2].image3} alt="product" />
                            </ul>
                        ))}
                    </div>
                </div>

                <div className="panel-2">
                    <div className="image">
                        {products.map(product => (
                            <ul>
                                <img src={product.shoes[1].images[2].image3} alt="" />
                                <img src={product.bags[0].images[1].image2} alt="" />
                            </ul>
                        ))}

                    </div>
                    <div className="row">
                        <h2 className='header-text' id='panel'>
                            Shop Our Accessories
                        </h2>
                        <h3 className='sub-header-text' id='panel'>
                            SAVE 50% OFF BUY 1, GET ONE FREE!
                        </h3>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Panel
