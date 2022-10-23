import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';



const Header = () => {

    // using location system 
    const location = useLocation();


    const { user, signOutHandler } = useContext(AuthContext);



    return (

        <nav>
            <img src={logo} alt="" />



            {/* Nav Menu Section Start*/}
            <div className='nav-menu-link'>
                <Link className='shop' to='/'>Shop</Link>
                <NavLink to='/order' >Order</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
                <NavLink to="/about">About us</NavLink>
                

                {
                    user ? 
                    <div className='nav-menu-link'><Link onClick={signOutHandler} to='/login'>Sign Out</Link>
                        <Link to='/' className='name'>{user?.displayName}</Link></div>

                        : <div className='nav-menu-link'>
                        <NavLink state={{from: location}} replace to='/login'>Login</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                        </div>

                }
            </div>




        </nav>
    );
};

export default Header;