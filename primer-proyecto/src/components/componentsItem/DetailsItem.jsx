import React from "react";
import "../../../styles/detailsItem.css"
import fetchSimulation from "../../../utils/fetchSimulation";
import Image from "./image";
import Description from "./description";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./ButtonDetalles";
import products from "../../../utils/products.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/ClipLoader";

const DetailsItem = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    setDatos([]);

    fetchSimulation(
      products.filter((flt) => flt.id == idItem),
      2000
    )
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="detailsItem">
      {datos.length === 0 ? (
        <MoonLoader color="#5b00fb" />
      ) : (
        datos.map((items) => (
          <>
            <div className="containerLeft">
              <Image imagen={items.img} />
            </div>

            <div className="containerRigth">
              <Description
                title={items.nombre}
                parrafo={items.description}
                cantidad={"Piezas en stock" + " " +items.cantidad}
                price={items.precio + "$"}
              />

              <div className="buttons">
                <ButtonDetalles txt="Agregar al carrito" />
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default DetailsItem;
