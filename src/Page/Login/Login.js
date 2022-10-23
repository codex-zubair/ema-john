import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login_register.css';


const Login = () => {

    // Login Error State SET it will COMES WITH ALERT!
    const [loginError, setLoginError] = useState();


    // Taking Value From Login Form Start.
    const singUpHandler =(event)=> 
    {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
    }
    // Taking Value From Login Form End.



    



    return (
        <form onSubmit={singUpHandler} className='login-from'>
            <h1 className='header'>Login</h1>

            <div className='email-filed'>
                <p>Email</p>
                <input required type="text" />
            </div>

            <div className='password-filed'>
                <p>Password</p>
                <input required type="text" />
            </div>

                <button className='submit'>Login</button>
            <div className='register-box'>
                <p>New to Ema-john?</p> <Link to='/register'>Create New Account</Link>
            </div>

            <div className='or-section' style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <hr /> <p style={{textAlign:'center'}}>or</p> <hr />
            </div>

            <button className='google-login'>Continue With Google</button>
        </form>
    );
};

export default Login;