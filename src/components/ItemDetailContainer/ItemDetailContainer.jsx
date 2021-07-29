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
    const {buscarItem,cart} = useContext(CartContext);


    const {id} = useParams();
    const {tipo} = useParams();
    const [Articulos, setArticulos] = useState([]);

    
    const [loading, setLoading] = useState(true);

    const getArticulo=()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                setLoading(false);
                resolve(Procesadores);
            }, 2000);
        })
    };

    getArticulo().then((resultado) => setArticulos(resultado));

    
    return(
        <>
        {!loading ? (
        <div className="w-50 mx-auto p-5 mt-4">
                {Articulos.map(uno => {
                            const found = cart.find(element => element.id == uno.id)
                            return id==uno.id && 
                                <>
                                {buscarItem(uno.id)  ? (
                                    tipo=="editar" ? (
                                        <>
                                        <ItemDetail inicio={found.cantidad} UNO={uno} key={uno.id}/>
                                        </>
                                    ):(
                                        <>
                                        {alert("Articulo ya incluido en el carrito")}
                                        <Redirect to="/"/>
                                        </>
                                    )
                                ):(
                                        <ItemDetail inicio={1} UNO={uno} key={uno.id}/>
                                )}
                                </>             
                })}
        </div>
        ):(
            <div>
                <img width="100px" src="/img/loading.gif" alt="" />
            </div>
        )}
        </>
    );
};

export default ItemDetailContainer;