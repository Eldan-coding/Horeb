import React, {useState} from 'react';
import './ItemCount.css';
import minus from '../../imagenes/minus.png';
import plus from '../../imagenes/plus.png';

const ItemCount = ({inicio, stock, cambiarCount, count}) => {
    //variables auxiliares para el stock y el inicio
    let auxInicio=parseInt(inicio);
    let auxstock=parseInt(stock);

    let i=1;
    let d=1;
    //validacion inicial
    if(auxInicio>auxstock  || auxInicio<1 || auxstock<1){
            i=0;
            d=0;
            alert("Valores no validos");
    }else{
        if(auxInicio===auxstock && auxstock>1){
            d=0;
        }else if (auxInicio===auxstock && auxstock===1){
            i=0;
            d=0;
        }else if(auxInicio===1){
            i=0;
        }
    }

    //variables switches para controlar las operaciones de los botones
    const [swAdd, setSwAdd] = useState(d);
    const [swRemove, setSwremove] = useState(i);    

    const validarAdd = () =>{
        if(count+1===auxstock) setSwAdd(0);
        if(count+1>1) setSwremove(1);
    }

    const validarRemove = () =>{
        if(count-1===1) setSwremove(0);
        if(count-1<auxstock) setSwAdd(1);
    }

    const addOne = () => {
        if(swAdd===1){
            cambiarCount(count+1);
            validarAdd();
        }
    }

    const removeOne = () => {
        if(swRemove===1){
            cambiarCount(parseInt(count)-1);
            validarRemove();
        }
    }

    
    
    return(
        <div className="controles">
            <img id="I" className="control" onClick={removeOne} src={minus} alt=""/>
            <input type="number" value={count}></input>
            <img id="D" className="control"  onClick={addOne} src={plus} alt=""/>
        </div>
    );
};

export default ItemCount;

