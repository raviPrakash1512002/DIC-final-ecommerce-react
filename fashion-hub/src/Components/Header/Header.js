import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Search from '../Search/Search';
// import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user]= useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
       <nav className='header'>
           <h4>Fashion<span>Hub</span></h4>
           <Search></Search>
           <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Carts</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">Signup</Link>
                {
                    user ?
                    <button className='signout-btn' onClick={handleSignOut}>signout</button>
                    :
                    <Link to="/login">Login</Link>
                }
           </div>
         
       </nav>
    );
};

export default Header;