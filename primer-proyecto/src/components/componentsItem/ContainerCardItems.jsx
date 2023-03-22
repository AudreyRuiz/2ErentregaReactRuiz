import React from "react";
import CardItem from "./cardItem";
import fetchSimulation from "../../../utils/fetchSimulation";
import products from "../../../utils/products.json";
import { useState, useEffect } from "react";
import "../../../styles/containerCardItems.css";
import{ useParams } from "react-router-dom"

const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory == undefined) {
      fetchSimulation(products, 2000)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error));
    } else{
      fetchSimulation(products.filter(find => find.type == idCategory), 2000)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error));
    }
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {datos.map((product) => (
        <CardItem
          key={product.id}
          imagen={product.img}
          title={product.nombre}
          cantidad={"Piezas en stock" + product.cantidad}
          precio={product.precio + "$"}
        />
      ))}
    </div>
  );
};

export default ContainerCardItems;
