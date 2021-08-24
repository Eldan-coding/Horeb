import React, { useState, useContext } from "react";
import { CartContext } from "../../services/CartContext";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { database } from "../../firebase/firebase";

const Cart = () => {
    
  const {cart, EliminarItem,cartCount,setCartCount,total,setCart} = useContext(CartContext);
  const [confirmado, setConfirmado] = useState(false);

  const [envioEstado, setEnvioEstado] = useState(true);

  const confirmarEstado = () => {
      setConfirmado(!confirmado);
      setEnvioEstado(true);
    }

  const registrar= (e) =>{
    const ordenes= database.collection("ordenes");
    let id;
        
    e.preventDefault();

    const buyer = {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value
    };

    const orden = {
        buyer: buyer,
        items: cart,
        date: new Date().toString(),
        total: total
    }
    
    ordenes
      .add(orden)
      .then((response) => {
        ///Si todo sale bien, nos va a devolver en la respuesta el ID de la orden
        id = response.id;
        setConfirmado(!confirmado)
        alert("compra creada, numero de orden: "+id)
        setCart([]);
        setCartCount(0);
      })
      .catch((error) => {
        ///Si llega a haber cualquier otro error, notificamos al usuario
        alert("ERROR: " + error);
      })
  }

  const ValidamosFormulario = () =>{
    let nombre=document.querySelector('#name')
    let tel=document.querySelector('#phone')
    let tel2=document.querySelector('#phone2')
    let corr=document.querySelector('#email')
    let corr2=document.querySelector('#email2')

    let phoneEstado;
    let correoEstado;

    if (tel.value.length!=0 && tel2.value.length!=0){
        if(tel.value==tel2.value){
            tel.style.border="green 1px solid";
            tel2.style.border="green 1px solid";
            phoneEstado=true;
        }else{
            tel.style.border="red 1px solid";
            tel2.style.border="red 1px solid";
            phoneEstado=false;
        }
    }else{
        tel.style.border="";
        tel2.style.border="";
    }

    if (corr.value.length!=0 && corr2.value.length!=0){
        if(corr.value==corr2.value){
            corr.style.border="green 1px solid";
            corr2.style.border="green 1px solid";
            correoEstado=true;
        }else{
            corr.style.border="red 1px solid";
            corr2.style.border="red 1px solid";
            correoEstado=false;
        }
    }else{
        corr.style.border="";
        corr2.style.border="";
    }

    if (nombre.value.length!=0 && correoEstado && phoneEstado){
        setEnvioEstado(false);
    }else{
        setEnvioEstado(true);
    }
  }

    
    
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
            <>
            {cart.map(item => ( 
                <div className="card mb-3 w-50 mt-5 mx-auto">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 p-3">
                            <img src={item.imagenUrl} className="img-fluid rounded-start m-2" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.titulo}</h5>
                                <p className="card-text">{item.descripcion}</p>
                                <p className="card-text"><small className="text-muted">{item.precio}X{item.cantidad}=${item.precio*item.cantidad}</small>{!confirmado &&<Link  to={"/CPU/"+item.id+"/editar"}>(<img src="/img/pencil.png" className="img-fluid rounded-start m-2" alt="..."/>)</Link>}</p>
                                {!confirmado && <Button onClick={() => {EliminarItem(item.id);setCartCount(cartCount-item.cantidad);}} variant="outline-danger">Eliminar</Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                ))} 
                {confirmado ?(
                    <Button onClick={confirmarEstado} variant="outline-success">Editar Compra</Button>
                ):(
                    <Button onClick={confirmarEstado} variant="outline-success">Confirmar Compra</Button>
                )}
            {confirmado &&
            <div className="w-50 mx-auto border my-5 p-5 text-left">
                <Form onSubmit={registrar}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control id="name" onBlur={ValidamosFormulario} className="text-left" type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control id="phone" onBlur={ValidamosFormulario} className="text-left" type="number" placeholder="Telefono" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>confirmar Telefono</Form.Label>
                    <Form.Control id="phone2" onBlur={ValidamosFormulario} className="text-left" type="number" placeholder="Confirmar Telefono" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control id="email" onBlur={ValidamosFormulario} className="text-left" type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirmar Correo</Form.Label>
                    <Form.Control id="email2" onBlur={ValidamosFormulario} className="text-left" type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Total</Form.Label>
                    <Form.Control value={total} className="text-left" type="number" disabled/>
                </Form.Group>
                    <Button disabled={envioEstado} id="envio" type="submit" variant="info">Comprar</Button>
                </Form>
            </div>}
            </>
        )}
        </>
    );
};

export default Cart;