import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Item = ({CPU}) => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return(
        <div className="col-4">
            <div className="card">
            <img src={CPU.imagenUrl} className="card-img-top" alt="CPU"/>
            <div className="card-body">
                <h5 className="card-title text-danger">{CPU.titulo}</h5>
                <p className="card-text">{CPU.descripcion}</p>
                <h5 className="card-title text-info">${CPU.precio}</h5>
            <Button variant="primary" onClick={handleShow}>
                Comprar
            </Button>
                

            <Modal show={show} onHide={handleClose}>
                <ItemDetailContainer CPU={CPU}/>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
            </div>
        </div>

    );
};

export default Item;