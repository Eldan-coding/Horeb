import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; */
import { Link } from 'react-router-dom';
import { CartContext } from "../../services/CartContext";

const Item = ({CPU}) => {
//From Cartcontext:
const {buscarItem} = useContext(CartContext);


/* const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true); */

    return(
            <div className="card mb-4">

            {buscarItem(CPU.id) ?(
                <img onClick={() => alert("Este Item esta en el carrito")} src={CPU.imagenUrl} className="card-img-top" alt="CPU"/>
            ):(
                <Link to={"/CPU/"+CPU.id+"/normal"}>{/* normal quiere decir una comprar comun y corriente */}
                    <img src={CPU.imagenUrl} className="card-img-top" alt="CPU"/>
                </Link>
            )}

            <div className="card-body">
                <h5 className="card-title text-danger">{CPU.titulo}</h5>
                <p className="card-text">{CPU.descripcion}</p>
                <h5 className="card-title text-info">${CPU.precio}</h5>
            {/* <Button variant="primary" onClick={handleShow}>
                Comprar
            </Button>
                
            <Modal show={show} onHide={handleClose}>
                <ItemDetailContainer CPU={CPU}/> 
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal> */}
            </div>
            </div>
    );
};

export default Item;