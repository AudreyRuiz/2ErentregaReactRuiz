import React from 'react'
import "../../../styles/containterCart.css"
import close from "../../../Img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../../Img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../componentsItem/ProviderContextListCart";

const ContainerCart = () => {

    const { cartShow, setCartShow} = useContext(controllerShowCart);
    const {listCart, clearCart } = useContext(listCartContext);

    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        
            <div className="cart" style={style} >
                <div className="cerrar">
                    <button className="close" onClick={closeCart}>
                        <img src={close}></img>
                    </button>
                </div>

                <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
                        : listCart.map(producto => ( 
                            <ItemCart 
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                image={producto.image}
                                quantity={producto.cantidad}
                                price={producto.precio}
                            />
                        ))
                    }   
                </div>

                <div className="TerminarCompra">
                    
                    <button className="terminar" >
                        Terminar compra
                    </button>

                    <button className="clear" onClick={clearCart}>
                        <img src={clear}></img>
                    </button>
                </div>
            </div>
        
    )
}

export default ContainerCart