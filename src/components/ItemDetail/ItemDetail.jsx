import React, {useContext, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";

const ItemDetail = ({UNO, inicio}) => {
    //From Cartcontext:
    const {addItem, buscarItem, editItem, setCartCount, cartCount} = useContext(CartContext);

    const [count, setCount] = useState(inicio);
   
    const [comprar, setComprar] = useState(false);

    const cambiarEstadoCompra = () => setComprar(!comprar);

    const agregarACarrito = () => {
        let aux=inicio;
        if (buscarItem(UNO.id)) {
            editItem(UNO.id,count);
            console.log(cartCount)
            setCartCount((cartCount-aux)+count);
        }else{
            addItem({ ...UNO,cantidad: count })
            setCartCount(cartCount+count);
        }
        
    };

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
            {!comprar ? (
                <>
                <ItemCount stock="10" inicio={count} cambiarCount={setCount} count={count}/>
                <Button className="mt-2" onClick={cambiarEstadoCompra} variant="warning">Comprar</Button>
                </>
            ):(
                <>
                <Link to="/Cart" onClick={cambiarEstadoCompra}>
                    <Button onClick={() => {agregarACarrito()}} className="d-block w-50 mx-auto my-1" variant="success">Confirmar Compra</Button>
                </Link>
                <Button className="d-block w-50 mx-auto" onClick={cambiarEstadoCompra} variant="warning">Editar Compra</Button>
                </>
            )}

            </div>
            
        </div>
        </div>
    );
};

export default ItemDetail;