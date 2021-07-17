import React, {useState} from "react";
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemList = () => {
    
    const [listaItems, setListaItems] = useState([]);

    const Items=[{ id: 1, titulo:  "Ryzen5", descripcion: "Lorem ipsum dolor sit amet"  , precio: 300, imagenUrl: "./img/ryzen5.jpg"},
    { id: 2, titulo:  "Ryzen7", descripcion: "Lorem ipsum dolor sit amet"  , precio: 450, imagenUrl: "./img/ryzen7.jpg"},
    { id: 3, titulo:  "Ryzen8", descripcion: "Lorem ipsum dolor sit amet"  , precio: 600, imagenUrl: "./img/ryzen9.jpg"}];


    const getItems=()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(Items);
            }, 2000);
        })
    };

    getItems().then((resultado) => setListaItems(resultado));

    return(
        <div className="container w-75">
            <div className="row">
            {listaItems.map(CPU => (
                <Item CPU={CPU} key={CPU.id}/>
            ))}
            </div>
        </div>  
    );
};

export default ItemList;