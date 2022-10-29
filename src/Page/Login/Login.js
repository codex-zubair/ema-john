import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login_register.css';


const Login = () => {

    // Get Data From Context api
    const { loginByEmail,googleLogin } = useContext(AuthContext);


    // Getting location system.
    const location = useLocation();

    // Getting Location.
    const from = location.state?.from?.pathname || '/'; 

 


    // navigate system 
    const navigate = useNavigate();


    // Login Error State SET it will COMES WITH ALERT!
    const [loginError, setLoginError] = useState();


    // Taking Value From Login Form Start.
    const loginHandler = (event) => {
        event.preventDefault();
        event.stoppropagation();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        // TODO Routes not working properly
        loginByEmail(email, password)
            .then(() => {})
           
            .catch(error => console.log(error));



            // navigate(from, {replace: true})


    }
    // Taking Value From Login Form End.




    // Login with google Start
    const loginWithGoogle = ()=>
    {
        googleLogin()
        .then(()=> navigate(from, {replace: true}))
        .catch(error=> console.log(error))
    }
    // Login with google End




    return (
        <div className='login-from'>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <form onSubmit={loginHandler}>
            <h1 className='header'>Login</h1>

            <div className='email-filed'>
                <p>Email</p>
                <input name='email' required type="text" />
            </div>

            <div className='password-filed'>
                <p>Password</p>
                <input name='password' required type="password" />
            </div>

            <button className='submit'>Login</button>
            <div className='register-box'>
                <p>New to Ema-john?</p> <Link to='/register'>Create New Account</Link>
            </div>

            <div className='or-section' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <hr /> <p style={{ textAlign: 'center' }}>or</p> <hr />
            </div>

        </form>
            <button onClick={loginWithGoogle} className='google-login'>Continue With Google</button>

        </div>
    );
};

export default Login;