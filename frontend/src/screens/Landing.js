import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Panel from '../components/Panel';
import Arrow from '../images/arrow-down.png';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Landing = () => {
    return (
        <Fragment>
            <div className='landing'>
                <h1 className='header-text'>ALMV</h1>

                <div className="image">
                    <a href='#panel1'><img src={Arrow} alt="Down Arrow" /></a>
                </div>
                <Panel />
            </div>
        </Fragment>
    )
}

export default Landing
