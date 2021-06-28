import React from "react";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav>
            <h1>Horeb</h1>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contactenos</li>
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;