import React, {createContext, useState} from "react";

export const CartContext= createContext();

export const DataProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    const buscarItem = (id) => {
        const found = cart.find(element => element.id === id);
        if (found){
            return true;
        }else{
            return false;
        }
    }

    const EliminarItem = (id) => {
        let aux=[];
        let auxtotal=0;
        for (const item of cart) {
            if (id!==item.id){
                aux.push(item);
                auxtotal=auxtotal+(item.precio*item.cantidad)
            }
        }
        setCart(aux);
        setTotal(auxtotal);
    }

    const addItem = (itemRecibido) => {
        let auxtotal=0;
        for (const item of cart) {
            auxtotal=auxtotal+(item.precio*item.cantidad)
        }        
        auxtotal=auxtotal+(itemRecibido.precio*itemRecibido.cantidad)
        setCart([...cart, itemRecibido]);
        setTotal(auxtotal);
    };

    const editItem = (id,quan) => {
        let auxtotal=0;
        for (const item of cart) {
            if (id===item.id){
                item.cantidad=quan;
            }
                auxtotal=auxtotal+(item.precio*item.cantidad)
        }
        setTotal(auxtotal);
    };

    return <CartContext.Provider value={{cart, buscarItem, addItem, EliminarItem, editItem, cartCount,setCartCount, total, setCart}}>
        {children}
    </CartContext.Provider>
}