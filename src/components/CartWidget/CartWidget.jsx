import React from "react";
import './CartWidget.css';
import cart from './shopping-cart.png'

const CartWidget = () => {
    return(
        <div>
        <img src={cart} alt="" />
        </div>
    );
};

export default CartWidget;