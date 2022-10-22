import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {

    const singUpHandler =(event)=> 
    {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

    }


    return (
        <form onSubmit={singUpHandler} className='register-from'>
            <h1 className='header'>Sign Up</h1>

            <div className='name-filed'>
                <p>Name</p>
                <input name ='name' type="text" />
            </div>
            <div className='email-filed'>
                <p>Email</p>
                <input name='email' type="text" />
            </div>

            <div className='password-filed'>
                <p>Password</p>
                <input name='password' type="text" />
            </div>

                <button className='submit'>Sign Up</button>
            <div className='register-box'>
                <p>Already have an account?</p> <Link to = '/login'>Login</Link>
            </div>

            <div className='or-section' style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <hr /> <p style={{textAlign:'center'}}>or</p> <hr />
            </div>

            <button className='google-login'>Continue With Google</button>
        </form>
    );
};

export default Register;