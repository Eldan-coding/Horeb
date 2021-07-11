import React from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    return(
        <div className="mainContainer">
            <p>{props.greeting}</p>
            <ItemList/>
            <ItemCount stock="10" inicio="1"/>
        </div>
    );
};

export default ItemListContainer;