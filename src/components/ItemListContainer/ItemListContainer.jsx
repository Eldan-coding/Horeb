import React from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    return(
        <div className="mainContainer">
            <p>{props.greeting}</p>
            <ItemCount stock="1" inicio="1"/>
        </div>
    );
};

export default ItemListContainer;