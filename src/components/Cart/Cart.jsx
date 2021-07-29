import React, { useContext } from "react";
import { CartContext } from "../../services/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    
  const {cart, EliminarItem,cartCount,setCartCount} = useContext(CartContext);


    return(
        <>
        {cart.length==0 ?(
            <>
            <h1 className="mt-5 text-dark">No hay articulos en el carrito</h1>
            <Link to="/">
                <Button variant="dark">Volver a los articulos</Button>
            </Link>
            </>
        ):(    
            cart.map(item => (
                <div className="card mb-3 w-50 mt-5 mx-auto">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 p-3">
                            <img src={item.imagenUrl} className="img-fluid rounded-start m-2" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.titulo}</h5>
                                <p className="card-text">{item.descripcion}</p>
                                <p className="card-text"><small className="text-muted">{item.precio}X{item.cantidad}=${item.precio*item.cantidad}</small><Link to={"/CPU/"+item.id+"/editar"}>(<img src="/img/pencil.png" className="img-fluid rounded-start m-2" alt="..."/>)</Link></p>
                                
                                <Button onClick={() => {EliminarItem(item.id);setCartCount(cartCount-item.cantidad);}} variant="outline-danger">Eliminar</Button>
                            </div>
                        </div>
                    </div>
                </div>
                ))
        )}
        </>
    );
};

export default Cart;