import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Link to="/"><h1 className="cate">Horeb</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto elnav">
                <Link className="mx-5" to="/Categoria/CPU"><li className="cate">Procesadores</li></Link>
                <Link className="mx-5" to="/Categoria/RAM"><li className="cate">Memorias RAM</li></Link>
                <Link className="mx-5" to="/Categoria/GPU"><li className="cate">Tarjetas De Video</li></Link>
                <Link className="mx-5" to="/Categoria/BOARD"><li className="cate">Tarjetas Madres</li></Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
            <Link to="/Cart">
                <CartWidget/>
            </Link>
        </Navbar>


       /*  <nav className="mynav">
            <Link to="/">
                <h1>Horeb</h1>
            </Link>
            <ul>
                <Link to="/Categoria/CPU"><li>Procesadores</li></Link>
                <Link to="/Categoria/RAM"><li>Memorias RAM</li></Link>
                <Link to="/Categoria/GPU"><li>Tarjetas De Video</li></Link>
                <Link to="/Categoria/BOARD"><li>Tarjetas Madres</li></Link>
            </ul>
            
        </nav> */
    );
};

export default NavBar;