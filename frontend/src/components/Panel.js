import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import arrow from '../images/diagnol-arrow.png';
import Slider from "react-slick";
import 'ember-burger-menu';



// import Product from './Product';


const Panel = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <Fragment>
            <div className='panel' id='panel1'>
                {products.map(product => (
                    <ul className='panel-images'>
                        <Slider {...settings}>
                            <Link to={`/product/${product.jacket[0].category.name}/${product.jacket[0].id}`}>
                                <img src={product.jacket[0].images[0].image1} alt='product' />
                            </Link>

                            <Link to={`/product/${product.dress[0].category.name}/${product.dress[0].id}`}>
                                < img src={product.dress[0].images[0].image1} alt='product' />
                            </Link>

                            <Link to={`/product/${product.jeans[1].category.name}/${product.jeans[1].id}`}>
                                < img src={product.jeans[1].images[0].image1} alt='product' />
                            </Link>

                            <Link to={`/product/${product.skirt[1].category.name}/${product.skirt[1].id}`}>
                                < img src={product.skirt[1].images[0].image1} alt='product' />
                            </Link>
                        </Slider>
                    </ul>

                ))}

                <marquee behavior="scroll" direction="right" scrollamount="15">
                    <div className="new">
                        <h2 className='header-text'>New In</h2>
                        <h2 className='header-text'>New In</h2>
                        <h2 className='header-text'>New In</h2>
                        <h2 className='header-text'>New In</h2>
                        <h2 className='header-text'>New In</h2>
                        <h2 className='header-text'>New In</h2>
                    </div>
                </marquee>

                <div className="collection" >
                    <div className="row">
                        <h3>F/W 20’/21’</h3>
                        <h4><img src={arrow} alt='Arrow' />See Full Collection</h4>
                        <p>
                            This F/W we expressed our fave neutrals with bold and striking refinements —ALMV.
                            I always loved aesthetics. Not particularly fashion, but an idea of beauty. I think I’d go mad if I didn’t have a place to escape to. You have to stay true to your heritage; that’s what your brand is about. Fashion is made to become unfashionable. A practice. If you do this, something will change, what will change is that you will change, your life will change, and if you can change you, you can perhaps change the world.  Age and size are only numbers. It’s the attitude you bring to clothes that make the difference. I always loved aesthetics. Not particularly fashion, but an idea of beauty. All I did my first year at Vogue was Xerox. Design is a constant challenge to balance comfort with luxe, the practical with the desirable. It’s a philosophy of life.
                        </p>
                    </div >
                    <div className="image">
                        {products.map(product => (
                            <ul>
                                <Link to={`/product/${product.jacket[3].category.name}/${product.jacket[3].id}`}>
                                    <img src={product.jacket[3].images[2].image3} alt="product" />
                                </Link>
                                <Link to={`/product/${product.jeans[3].category.name}/${product.jeans[3].id}`}>
                                    <img src={product.jeans[3].images[2].image3} alt="product" />
                                </Link>
                            </ul>
                        ))}
                    </div>
                </div>

                <div className="panel-2">
                    <div className="image">
                        {products.map(product => (
                            <ul>
                                <Link to={`/product/${product.shoes[1].category.name}/${product.shoes[1].id}`}>
                                    <img src={product.shoes[1].images[2].image3} alt='product' />
                                </Link>

                                <Link to={`/product/${product.bags[0].category.name}/${product.bags[0].id}`}>
                                    <img src={product.bags[0].images[1].image2} alt='product' />
                                </Link>
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
