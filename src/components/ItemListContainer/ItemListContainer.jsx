import React from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    return(
        <div className="mainContainer">
            <p>{props.greeting}</p>
            <ItemList/>
        </div>
    );
};

export default ItemListContainer;