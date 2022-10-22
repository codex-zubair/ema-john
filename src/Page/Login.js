import React from 'react';
import { Link } from 'react-router-dom';
import './Login_register.css';

const Login = () => {
    return (
        <form className='login-from'>
            <h1 className='header'>Login</h1>

            <div className='email-filed'>
                <p>Email</p>
                <input type="text" />
            </div>

            <div className='password-filed'>
                <p>Password</p>
                <input type="text" />
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