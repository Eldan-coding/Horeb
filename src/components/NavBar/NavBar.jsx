import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="mynav">
            <Link to="/">
                <h1>Horeb</h1>
            </Link>
            <ul>
                <a href="#"><li>Inicio</li></a>
                <a href="#"><li>Productos</li></a>
                <a href="#"><li>Nosotros</li></a>
                <a href="#"><li>Contactenos</li></a>
            </ul>
            
            <Link to="/Cart">
                <CartWidget/>
            </Link>
        </nav>
    );
};

export default NavBar;