import React, {useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';


const ItemDetailContainer = ({CPU}) => {
    
    const array = [];
    const [Articulo, setArticulo] = useState([]);
    array.push(CPU);

    const getArticulo=()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(array);
            }, 2000);
        })
    };

    getArticulo().then((resultado) => setArticulo(resultado));
    console.log(Articulo);

    return(
        <div>
            <Modal.Header closeButton>
            <Modal.Title>{CPU.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Articulo.map(uno => (
                    <ItemDetail UNO={uno} key={uno.id}/>
                ))}
            </Modal.Body>
        </div>
    );
};

export default ItemDetailContainer;