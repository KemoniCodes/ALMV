import React from 'react';
import '../scss/header.scss';
import navbars from '../images/navbars.png'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>shop</li>
                    <li className='header-text'>V</li>
                    <li>
                        <img src={navbars} alt="navbars" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
