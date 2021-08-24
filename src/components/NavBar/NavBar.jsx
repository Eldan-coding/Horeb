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
                <Link to="/Categoria/CPU"><li>Procesadores</li></Link>
                <Link to="/Categoria/RAM"><li>Memorias RAM</li></Link>
                <Link to="/Categoria/GPU"><li>Tarjetas De Video</li></Link>
                <Link to="/Categoria/BOARD"><li>Tarjetas Madres</li></Link>
            </ul>
            
            <Link to="/Cart">
                <CartWidget/>
            </Link>
        </nav>
    );
};

export default NavBar;