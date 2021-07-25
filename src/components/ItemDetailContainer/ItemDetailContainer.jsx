import React, {useContext, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router";
import {Procesadores} from '../../Items.json';
import { CartContext } from "../../services/CartContext";
import { Redirect } from "react-router-dom";

const ItemDetailContainer = () => {
    //From Cartcontext:
    const {buscarItem} = useContext(CartContext);


    const {id} = useParams();
    const [Articulos, setArticulos] = useState([]);

    const getArticulo=()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(Procesadores);
            }, 2000);
        })
    };

    getArticulo().then((resultado) => setArticulos(resultado));

    
    return(
        <div className="w-50 mx-auto p-5 mt-4">
                {Articulos.map(uno => {
                            return id==uno.id && 
                                <>
                                {buscarItem(uno.id) ? (
                                    <>
                                    {alert("Articulo ya incluido en el carrito")}
                                    <Redirect to="/"/>
                                    </>
                                ):(
                                    <ItemDetail UNO={uno} key={uno.id}/>
                                )}
                                </>             
                })}
        </div>
    );
};

export default ItemDetailContainer;