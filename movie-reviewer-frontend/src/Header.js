import React from 'react';
import { NavLink } from "react-router-dom";

 function Header () { 
    return (
        <body>
            <nav className="head">
                <h4 className="title">Backseat Critic</h4>
            </nav>
            <nav className="options">
                <ul class="nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav>
        </body>
        
        
    )
}

export default Header