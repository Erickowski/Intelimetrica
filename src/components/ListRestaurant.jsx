import React from "react";
import Restaurant from "./Restaurant";
import Spinner from "./Spinner";

const ListRestaurant = ({ restaurants }) => {
  return (
    <div className="my-3 mx-5 row d-flex justify-content-center">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default ListRestaurant;
