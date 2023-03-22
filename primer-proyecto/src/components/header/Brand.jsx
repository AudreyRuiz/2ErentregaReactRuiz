import React from "react";
import brand from "../../../Img/logo.svg";
import { Link } from "react-router-dom";
const Brand = () => {
  return (
    <Link to="/">
      <img src={brand} alt="Logo Formula1" title="Tienda f1" />
    </Link>
  );
};

export default Brand;
