import React from "react";
import './CartWidget.css';
import cart from '../../imagenes/shopping-cart.png';

const CartWidget = () => {
    return(
        <div>
            <img className="imgCar" src={cart} alt="" />
        </div>
    );
};

export default CartWidget;