import React from "react";
import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";

const NavBar = () => {
  return (
    // <div className="navContainer">
    <ContextCart>
      <header>
        <div className="containerLogo">
          <Brand />
        </div>

        <nav className="containerLista">
          <ItemListContainer
            itemUno="Chamarras"
            itemDos="Gorras"
            itemTres="Camisas"
            itemCuatro="Playeras"
            itemCinco="Sudaderas"
          />
        </nav>

        <div className="containerCarrito">
          <CartWidget />
        </div>
        <ContainerCart />
      </header>
    </ContextCart>
    // </div>
  );
};

export default NavBar;
