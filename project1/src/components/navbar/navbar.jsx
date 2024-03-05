 import React from 'react';
import  "./navbar.css";

 export default function Navbar(){
     return (
         <div className="navbar-container">
            <img src="./images/brand_logo.png" alt="" />
            <div className="nav-items">
                <ul> 
                    <li>Menu</li>
                    <li>Location </li>
                    <li>About </li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="login-btn">
                <p>Login</p>
            </div>
         </div>
     );
 };