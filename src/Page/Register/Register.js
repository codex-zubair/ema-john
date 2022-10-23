import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Register.css';



const Register = () => {

    // Taking Values From USE CONTEXT>>>
    const {emailSignUp,setUserNameAndPhoto} = useContext(AuthContext);


    // Error State For Sign UP System
    const [error, setError] = useState("Already have an account?");



    // Handler For Taking USER INFO FROM Form Start.
    const singUpHandler = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        //   Regular Expression Password Checking Start
        if (password.length < 5) {
            return setError("Password should be at least 6 character!");
        }

        if (!/[@#^&*$#@%]/.test(password)) {
            return setError("Please add at least one Special Character!");
        }
        //   Regular Expression Password Checking End


        if(confirm !== password)
        {
            return alert("Password are not Match!");
        }

        
    
        // SignUP Using EMAIL start
        emailSignUp(email,password)
        .then(result=> console.log(result))
        .catch(error=> console.log(error));
        // SignUP Using EMAIL End


        // Set User Name AND PHOTO Start
        setUserNameAndPhoto(name)
        .then(result=> console.log(result))
        .catch(error=> console.log(error));
        // Set User Name AND PHOTO End

    }
    // Handler For Taking USER INFO FROM Form End.


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