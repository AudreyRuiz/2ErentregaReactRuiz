import React from "react";

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>{props.itemUno}</li>
      <li>{props.itemDos}</li>
      <li>{props.itemTres}</li>
      <li>{props.itemCuatro}</li>
      <li>{props.itemCinco}</li>
    </ul>
  );
};

export default ItemListContainer;
