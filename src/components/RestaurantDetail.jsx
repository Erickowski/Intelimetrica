import React from "react";
import { useParams } from "react-router-dom";
import MapView from "./MapView";

import Spinner from "./Spinner";

const RestaurantDetail = ({ restaurants }) => {
  const { id } = useParams();
  const actualRestaurant = restaurants.filter(
    (restaurant) => restaurant.id === id
  );

  if (actualRestaurant.length === 0) return <Spinner />;
  return (
    <div className="container">
      <h2>{actualRestaurant[0].name}</h2>
      <div className="address-container">
        <p>
          {actualRestaurant[0].address.street},{" "}
          {actualRestaurant[0].address.city},{" "}
          {actualRestaurant[0].address.state}.
        </p>
      </div>
      <div
        className="fb-like"
        data-href={actualRestaurant[0].contact.site}
        data-width="500px"
        data-layout="standard"
        data-action="like"
        data-size="small"
        data-share="true"
      ></div>
      <div className="my-4">
        <MapView
          actualRestaurant={actualRestaurant}
          restaurants={restaurants}
        />
      </div>
    </div>
  );
};

export default RestaurantDetail;
