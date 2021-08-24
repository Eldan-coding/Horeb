import React, {useEffect, useState} from "react";
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import { database } from "../../firebase/firebase";

const ItemList = ({cate}) => {
    
    const [listaItems, setListaItems] = useState([]);

    
    const [loading, setLoading] = useState(true);

    const productos= database.collection("productos");


    useEffect(() => {
        productos.get().then((resultado) => {
            const auxarray=[];
            resultado.docs.map(doc => {
                auxarray.push({...doc.data(), id:doc.id})
            })
        setListaItems(auxarray);
        setLoading(false);
        })
      }, []);

    return(
        <>
        {listaItems.length>0 ? (
            <div className="container w-75">
                <div className="row">
                {cate ? (
                listaItems.map(CPU => (
                    cate==CPU.categoria ? (
                        <div className="col-4">
                                <Item CPU={CPU} key={CPU.id}/>
                        </div>
                    ):(
                        <>
                        </>
                    )
                ))

                ):(
                    listaItems.map(CPU => (
                        <div className="col-4">
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