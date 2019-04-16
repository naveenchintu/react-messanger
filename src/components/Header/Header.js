import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return(   
        <header className="headerstyle">
            <h1>TODO'S APPLICATION</h1>
            <Link className='links' to="/">Home</Link> | <Link
            to="/about" className='links'>About</Link>
        </header>
    )
}
export default Header;