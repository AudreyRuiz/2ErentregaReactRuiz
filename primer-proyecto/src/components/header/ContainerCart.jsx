import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../../../styles/containterCart.css";
import close from "../../../Img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../../Img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../componentsItem/ProviderContextListCart";
import swal from 'sweetalert';

const ContainerCart = () => {
  const { cartShow, setCartShow } = useContext(controllerShowCart);
  const { listCart, clearCart } = useContext(listCartContext);

  const style = {
    display: cartShow,
  };

  const order = {
    buyer: {
      name: "audrey",
      email: "audrey@outlook.com",
      phone: "516132",
      direccion: "mex",
    },
    items: listCart.map((producto) => ({
      key: producto.id,
      id: producto.id,
      title: producto.nombre,
      image: producto.img,
      quantity: producto.quantity,
      price: producto.precio,
    })),
  };

  const handleClick = () => {
    clearCart(clearCart === "true");
    swal("Muchas gracias!", "Tu compra a sido aceptada!", "success");
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  const closeCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  return (
    <div className="cart" style={style}>
      <div className="cerrar">
        <button className="close" onClick={closeCart}>
          <img src={close}></img>
        </button>
      </div>

      <div className="containerItemsCart">
        {listCart.length === 0 ? (
          <span className="emptyCart">
            Tu carrito esta vacio, ¡compra ahora!
          </span>
        ) : (
          listCart.map((producto) => (
            <ItemCart
              key={producto.id}
              id={producto.id}
              title={producto.nombre}
              image={producto.img}
              quantity={producto.quantity}
              price={producto.precio}
            />
          ))
        )}
      </div>

      <div className="TerminarCompra">
        <button className="terminar" onClick={handleClick}>
          Terminar compra
        </button>

        <button className="clear" onClick={clearCart}>
          <img src={clear}></img>
        </button>
      </div>
    </div>
  );
};

export default ContainerCart;
