import React, {createContext, useState} from "react";

export const CartContext= createContext();

export const DataProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const buscarItem = (id) => {
        const found = cart.find(element => element.id == id);
        if (found){
            return true;
        }else{
            return false;
        }
    }

    const addItem = (itemRecibido) => setCart([...cart, itemRecibido]);

    return <CartContext.Provider value={{cart, buscarItem, addItem}}>
        {children}
    </CartContext.Provider>
}