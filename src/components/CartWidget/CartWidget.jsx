import React, { useContext } from "react";
import './CartWidget.css';
import cart from '../../imagenes/shopping-cart.png';
import { CartContext } from "../../services/CartContext";

const CartWidget = () => {
    
    const {cartCount} = useContext(CartContext);

    return(
        <div className="position-relative">
            <div className="position-absolute burbuja rounded-circle">{cartCount}</div>
            <img className="imgCar" src={cart} alt="" />
        </div>
    );
};

export default CartWidget;