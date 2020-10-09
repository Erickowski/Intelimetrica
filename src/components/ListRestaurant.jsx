import React from "react";
import Restaurant from "./Restaurant";
import Spinner from "./Spinner";

const ListRestaurant = ({ restaurants }) => {
  if (restaurants.length === 0) return <Spinner />;
  return (
    <div className="m-5 row d-flex justify-content-center">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default ListRestaurant;
