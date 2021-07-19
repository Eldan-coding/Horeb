import React, {useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router";
import {Procesadores} from '../../Items.json';

const ItemDetailContainer = () => {
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
                    return id==uno.id ? 
                    <ItemDetail UNO={uno} key={uno.id}/>
                        :
                        <></>                    
                })}
        </div>
    );
};

export default ItemDetailContainer;