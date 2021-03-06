import React, {useContext, useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router";
import { database } from "../../firebase/firebase";
import { CartContext } from "../../services/CartContext";
import { Redirect } from "react-router-dom";

const ItemDetailContainer = () => {
    //From Cartcontext:
    const {buscarItem,cart} = useContext(CartContext);

    //From URL:
    const {id} = useParams();
    const {tipo} = useParams();

    
    const [Articulos, setArticulos] = useState([]);//contendra los productos obtenidos de firebase

    const productos= database.collection("productos");//guardamos la collection desde el firebase


    useEffect(() => {
        productos.get().then((resultado) => {
            const auxarray=[];
            resultado.docs.forEach(doc => {
                auxarray.push({...doc.data(), id:doc.id})//Agregamos el ID a un producto
            })
        setArticulos(auxarray);
        })
    }, [productos]);
    
    return(
        <>
        {Articulos.length>0 ? (
        <div className="w-75 mx-auto p-5 mt-4">
                {Articulos.map(uno => {
                        //console.log(Articulos)
                            const found = cart.find(element => element.id === uno.id)
                            return id===uno.id && 
                                <>
                                {buscarItem(uno.id)  ? (
                                    tipo==="editar" ? (//verificamos que se edite
                                        <>
                                        <ItemDetail inicio={found.cantidad} UNO={uno} key={uno.id}/>
                                        </>
                                    ):(//si no se edita asumimos que es normal pero ya el producto esta en el carrito
                                        <>
                                        {alert("Articulo ya esta incluido en el carrito ")}
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