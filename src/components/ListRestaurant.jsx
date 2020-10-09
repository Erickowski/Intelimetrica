import React from "react";
import Spinner from "./Spinner";

const ListRestaurant = ({ restaurants }) => {
  if (restaurants.length === 0) return <Spinner />;
  return <h1>Desde restaurante</h1>;
};

export default ListRestaurant;
