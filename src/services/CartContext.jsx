import React, {createContext, useState} from "react";
import Cart from "../components/Cart/Cart";

export const CartContext= createContext();

export const DataProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const buscarItem = (id) => {
        const found = cart.find(element => element.id == id);
        if (found){
            return true;
        }else{
            return false;
        }
    }

    const EliminarItem = (id) => {
        let aux=[];
        for (const item of cart) {
            if (id!=item.id){
                aux.push(item);
            }
        }
        setCart(aux);
    }

    const addItem = (itemRecibido) => setCart([...cart, itemRecibido]);

    const editItem = (id,quan) => {
        let aux=[];
        for (const item of cart) {
            if (id==item.id){
                item.cantidad=quan;
            }
            aux.push(item);
        }
    };

    return <CartContext.Provider value={{cart, buscarItem, addItem, EliminarItem, editItem, cartCount,setCartCount}}>
        {children}
    </CartContext.Provider>
}