import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/Chamarras">
          {props.itemUno}
        </Link>
      </li>
      <li>
        <Link to="category/Gorras">
          {props.itemDos}
        </Link>
      </li>
      <li>
        <Link to="category/Camisas">
          {props.itemTres}
        </Link>
      </li>
      <li>
        <Link to="category/Playeras">
          {props.itemCuatro}
        </Link>
      </li>
      <li>
        <Link to="category/Sudaderas">
          {props.itemCinco}
        </Link>
      </li>
    </ul>
  );
};

export default ItemListContainer;
