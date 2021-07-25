import React, { useContext } from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { CartContext } from "../../services/CartContext";

const ItemListContainer = (props) => {
    
  const {cart} = useContext(CartContext);


    return(
        <div className="mainContainer">
            <p>{props.greeting}</p>
              {console.log(cart)}{/* se verifica el contenido del carrito */}
            <ItemList/>
        </div>
    );
};

export default ItemListContainer;