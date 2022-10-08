import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        <nav>
            {/* LOGO */}
            <div>
            <img src={logo} alt="" />
            </div>


            {/* Nav Menu Section Start*/}
            <div className='nav-menu-link'>
                <a src='/order'>Order</a>
                <a>Order Review</a>
                <a>Manage Review</a>
                <a>Login</a>
            </div>
            {/* Nav Menu Section End*/}

        </nav>
    );
};

export default Header;