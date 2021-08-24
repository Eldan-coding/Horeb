import React, { useContext } from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { CartContext } from "../../services/CartContext";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    
  const {cart} = useContext(CartContext);
  const {catid} = useParams();


  return(
        <div className="mainContainer">
            <p>{props.greeting}</p>
          {/*     {console.log(cart)}*/}
            <ItemList cate={catid}/>
        </div>
  );
};

export default ItemListContainer;