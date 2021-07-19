import React, {useState} from "react";
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Procesadores} from '../../Items.json';

const ItemList = () => {
    
    const [listaItems, setListaItems] = useState([]);


    const getItems=()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(Procesadores);
            }, 2000);
        })
    };

    getItems().then((resultado) => setListaItems(resultado));

    return(
        <div className="container w-75">
            <div className="row">
            {listaItems.map(CPU => (
                
            <div className="col-4">
                    <Item CPU={CPU} key={CPU.id}/>
            </div>
            ))}
            </div>
        </div>  
    );
};

export default ItemList;