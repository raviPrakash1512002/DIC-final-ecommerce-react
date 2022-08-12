import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [signInWithEmailAndPassword,user,loading] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const from =location.state?.from?.pathname || '/'
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    if(user){
        navigate(from, {replace:true});
    }
   

    return (
        <div className='form-container'>
            <div onSubmit={handleUserSignin}>
                <h2 className='form-title'>Login</h2>
                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Email..."required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder="Password..." required />
                    </div>
                    <p>
                        {
                            loading && <p>Loading...</p>
                        }
                    </p>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p>New to FashionHub?<Link className='form-link' to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;