import React from 'react';
import { Link } from 'react-router-dom';
import navbars from '../images/navbars.png'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/shop'><li>shop</li></Link>
                    <Link to='/'><li className='header-text'>V</li></Link>
                    <li>
                        <img src={navbars} alt="navbars" />
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header
