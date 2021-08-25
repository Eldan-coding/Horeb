import React, {useEffect, useState} from "react";
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import { database } from "../../firebase/firebase";

const ItemList = ({cate}) => {
    
    const [listaItems, setListaItems] = useState([]);//contendra los productos obtenidos de firebase

    const productos= database.collection("productos");//guardamos la collection desde el firebase


    useEffect(() => {
        productos.get().then((resultado) => {
            const auxarray=[];
            resultado.docs.forEach(doc => {
                auxarray.push({...doc.data(), id:doc.id})//Agregamos el ID a un producto
            })
        setListaItems(auxarray);
        })
      }, [productos]);

    return(
        <>
        {listaItems.length>0 ? (
            <div className="container w-75">
                <div className="row">
                {cate ? (//si existe la catergoria en la URL
                listaItems.map(CPU => (
                    cate===CPU.categoria ? (//depende la categoria lo filtramos
                        <div className="col-12 col-sm-6 col-md-4">
                                <Item CPU={CPU} key={CPU.id}/>
                        </div>
                    ):(
                        <>
                        </>
                    )
                ))

                ):(//si no existe la categoria simplemente muestra todos los items
                    listaItems.map(CPU => (
                        <div className="col-12 col-sm-6 col-md-4">
                            <Item CPU={CPU} key={CPU.id}/>
                        </div>
                    ))
                )}
                </div>
            </div>  
        ):(
            <div>
                <img width="100px" src="/img/loading.gif" alt="" />
            </div>
        )}
        </>
    );
};

export default ItemList;