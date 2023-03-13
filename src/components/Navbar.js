import React from 'react'
import './Navbar.css'
function Navbar(){
    return(
        <>
        <nav>
            <ul id='head'>
                <li>
                    <a href='#'>Bakery</a>
                </li>
            </ul>
            <ul id='navbar'>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Shop</a></li>
                <li> <a href="#">Blog</a></li>
                <li> <a href="#">About </a></li>
                <li> <a href="#">Contact</a></li>
            </ul>
           
        </nav>
        </>
    )
}

export default Navbar;