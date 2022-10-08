import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';



const Header = () => {
    return (

        <nav>
            <img src={logo} alt="" />


            <div>

                {/* Nav Menu Section Start*/}
                <div div className='nav-menu-link'>
                <Link to='/'>Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to="/about">About US</Link>
                <Link to='/login'>Login</Link>

                </div>

            </div>


        </nav>
    );
};

export default Header;