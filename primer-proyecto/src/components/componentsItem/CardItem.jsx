import React from "react";
import Image from "./image";
import "../../../styles/items.css"
import Description from "./description";
import Details from "./Details";
import AddCart from "./AddCart";
import ImgPrueba from "../../../Img/poloRb.jpg"

const CardItem = () => {
  return (
    <div className="cardItems">
      <Image imagen={ImgPrueba}/>
      <Description 
      title="Oracle Red Bull Racing 2022 Team Polo"
      price="89 $"
      />
      <div className="buttons">
        <Details />
        <AddCart />
      </div>
    </div>
  );
};

export default CardItem;
