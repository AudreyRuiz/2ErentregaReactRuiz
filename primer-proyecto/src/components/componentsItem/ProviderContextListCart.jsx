import React from 'react'
import { useState } from "react";
import { createContext } from "react";
import products from "../../../utils/products.json";


export const listCartContext = createContext(null);

const ProviderContextListCart = ( {children} ) => {

    const [listCart, setListCart] = useState([]);

    const addProduct = (id) => {
        //producto a añadir al carrito
        const producAdd = products.find(product => product.id === id) 
        
        // productos se mantendran en el carrito 
        const productsToMaintain = listCart.filter(product => product.id !== id)

        let add = true;
        for(let product of listCart) {  
            if(product.id === id){
                let quantity = product.quantity;

                if(quantity < producAdd.cantidad){
                    const newQuantity = {...product, quantity: quantity + 1}
                    setListCart( [...productsToMaintain, newQuantity] )
                }

                add = false;
                break
            }  
        }

        add && setListCart( [...productsToMaintain, {...producAdd, quantity: 1}] )
    }
    const clearCart = () => {
        setListCart([]);
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id)
        setListCart(updateList);
    }
    
    return (
        <listCartContext.Provider value={ {removeFromCart ,listCart ,addProduct, clearCart} }>
            {children}
        </listCartContext.Provider> 
    );
}

export default ProviderContextListCart