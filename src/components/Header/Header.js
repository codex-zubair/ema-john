import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';



const Header = () => {

    const {user, signOutHandler} = useContext(AuthContext);



    return (

        <nav>
            <img src={logo} alt="" />

            

                {/* Nav Menu Section Start*/}
                <div className='nav-menu-link'>
                <Link className='shop' to='/'>Shop</Link>
                <NavLink to='/order' >Order</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to='/register'>Register</NavLink>

                <NavLink to='/login'>Login</NavLink>
                <Link onClick={signOutHandler} to='/login'>Sign Out</Link>
                <Link className='name'>{user?.displayName}</Link>
                </div>

            


        </nav>
    );
};

export default Header;