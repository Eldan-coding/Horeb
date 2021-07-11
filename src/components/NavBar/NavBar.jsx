import React from "react";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="mynav">
            <h1>Horeb</h1>
            <ul>
                <a href="#"><li>Inicio</li></a>
                <a href="#"><li>Productos</li></a>
                <a href="#"><li>Nosotros</li></a>
                <a href="#"><li>Contactenos</li></a>
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;