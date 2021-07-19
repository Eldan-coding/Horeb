import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({UNO}) => {
    return(
        <div className="container-fluid">
        <div className="row align-items-center">
            <div className='col-6'>
                <img src={UNO.imagenUrl} className="w-100" alt="CPU"/>
            </div>
            <div className='col-6 text-center'>
            <h5 className="card-title text-danger">{UNO.titulo}</h5>
                <p>{UNO.descripcion}</p>
                <strong>${UNO.precio}</strong>
            <ItemCount stock="10" inicio="1"/>
            </div>
            
        </div>
        </div>
    );
};

export default ItemDetail;