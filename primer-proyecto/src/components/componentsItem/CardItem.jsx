import React from "react";
import Image from "./image";
import "../../../styles/items.css"
import Description from "./description";
import Details from "./Details";
import AddCart from "./AddCart";

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
        <AddCart />
      </div>
    </div>
  );
};

export default CardItem;
