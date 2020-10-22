import React from 'react';
import '../scss/footer.scss';

const Footer = () => {
    return (
        <footer>
            <ul>
                <ul className='sub-list'>
                    <li className='sub-header-text'>Contact</li>
                    <li>hello@kemoniwilliams.tech</li>
                    <li>@kwintech</li>
                </ul>

                <ul className='sub-list'>
                    <li className='sub-header-text'>Privacy</li>
                    <li>Privacy Policy</li>
                    <li>Copyright</li>
                </ul>

                <ul className='sub-list'>
                    <li className='sub-header-text'>Menu</li>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Editorial</li>
                </ul>
            </ul>
            
            <li className="sub-header-text">
                COPYRIGHT© 2020 ALMV
                </li>
        </footer>
    )
}

export default Footer
