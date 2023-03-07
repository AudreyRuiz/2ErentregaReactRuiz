import React from "react";
import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navContainer">
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

        <div className="containerCarrito"> <CartWidget /> </div>
      </header>
    </div>
  );
};

export default NavBar;
