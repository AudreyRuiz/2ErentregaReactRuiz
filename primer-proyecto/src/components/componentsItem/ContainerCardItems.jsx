import React from "react";
import CardItem from "./cardItem";
import fetchSimulation from "../../../utils/fetchSimulation";
import products from "../../../utils/products.json";
import { useState, useEffect } from "react";

const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetchSimulation(products, 3000)
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, []);

  return <CardItem />;
};

export default ContainerCardItems;
