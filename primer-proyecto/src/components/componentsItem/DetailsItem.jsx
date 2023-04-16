import React from 'react'
import fetchSimulation from "../../../utils/fetchSimulation";
import Image from './image';
import Description from './description';
import AddCantCart from './AddCantCart'
import ButtonDetalles from './ButtonDetalles';
import products from "../../../utils/products.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    useEffect(() => {
        fetchSimulation(products.filter(flt => flt.id == idItem), 2000)
        .then (resp=> setDatos(resp))
        .catch (error => console.log(error))
    },[idItem])

    return(
        <div className='detailsItem'>
            {
                datos.map(items => (
                    <>
                    <div className="containerLeft">
                        <Image imagen={datos[0].imageProduct.img} />
                    </div>

                    <div className="containerRigth">
                        <Description 
                        nombre={datos[0].nombre}
                        parrafo={datos[0].description}
                        cantidad={datos[0].cantidad}
                        precio={datos[0].precio}
                        />


                    <div className="buttons">
                        <AddCantCart 
                        cant = {5}
                        />

                        <ButtonDetalles 
                        txt="Agregar al carrito"
                        />
                    </div>
                    </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem