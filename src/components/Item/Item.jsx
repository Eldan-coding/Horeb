import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({CPU}) => {
    return(
        <div className="col-4">
            <div className="card">
            <img src={CPU.imagenUrl} className="card-img-top" alt="CPU"/>
            <div className="card-body">
                <h5 className="card-title text-danger">{CPU.titulo}</h5>
                <p className="card-text">{CPU.descripcion}</p>
                <h5 className="card-title text-info">${CPU.precio}</h5>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
            </div>
        </div>

    );
};

export default Item;