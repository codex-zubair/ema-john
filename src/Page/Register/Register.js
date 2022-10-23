import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {

    const [error, setError] = useState("Already have an account?");

    const singUpHandler = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //   Regular Expression Password Checking Start
        if (password.length < 5) {
            return setError("Password should be at least 6 character!");
        }

        if (!/[@#^&*$#@%]/.test(password)) {
            return setError("Please add at least one Special Character!");
        }
        //   Regular Expression Password Checking End

    }


    return (
        <form onSubmit={singUpHandler} className='register-from'>
            <h1 className='header'>Sign Up</h1>

            <div className='name-filed'>
                <p>Name</p>
                <input required name='name' type="text" />
            </div>
            <div className='email-filed'>
                <p>Email</p>
                <input required name='email' type="text" />
            </div>

            <div className='password-filed'>
                <p>Password</p>
                <input required name='password' type="password" />
            </div>
            <div className='password-filed'>
                <p>Confirm Password</p>
                <input required name='confirm' type="password" />
            </div>

            <button className='submit'>Sign Up</button>
            <div className='register-box'>
                <p>{error}</p> <Link to='/login'>Login</Link>
            </div>

            <div className='or-section' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <hr /> <p style={{ textAlign: 'center' }}>or</p> <hr />
            </div>

            <button className='google-login'>Continue With Google</button>
        </form>
    );
};

export default Register;