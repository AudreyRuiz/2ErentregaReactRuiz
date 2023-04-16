import React from "react";
import Image from "./image";
import "../../../styles/items.css"
import Description from "./description";
import Details from "./Details";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import cart from "../../../Img/cart-white.svg"

const CardItem = (props) => {
  return (
    <div className="cardItems">
      <Image imagen={props.imagen}/>
      <Description 
      title={props.title}
      cantidad={props.cantidad}
      price={props.precio}
      />
      <div className="buttons">
        <Details />
        <ButtonAddCart 
        id={props.id}
        svg={cart}
        />
      </div>
    </div>
  );
};

export default CardItem;
