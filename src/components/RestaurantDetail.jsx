import React from "react";
import { useParams } from "react-router-dom";
import MapView from "./MapView";
import Restaurant from "./Restaurant";

import Spinner from "./Spinner";

const RestaurantDetail = ({ restaurants }) => {
  const { id } = useParams();

  const actualRestaurant = restaurants.filter(
    (restaurant) => restaurant.id === id
  );

  if (actualRestaurant.length === 0) return <Spinner />;

  const { lat, lng } = actualRestaurant[0].address.location;

  const nearRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.address.location.lat > lat - 0.0015 &&
      restaurant.address.location.lat < lat + 0.0015 &&
      restaurant.address.location.lng > lng - 0.002 &&
      restaurant.address.location.lng < lng + 0.002
  );

  const averageRating = nearRestaurants.reduce((a, b) => ({
    rating: a.rating + b.rating,
  }));

  const individualRatings = nearRestaurants.map((restaurant) =>
    Math.pow(
      restaurant.rating - averageRating.rating / nearRestaurants.length,
      2
    )
  );

  const standardDeviation = Math.sqrt(
    individualRatings.reduce((a, b) => a + b) / nearRestaurants.length
  );

  const restaurantRecommended = nearRestaurants.sort(
    (a, b) => b.rating - a.rating
  );

  return (
    <div className="container">
      <h2>{actualRestaurant[0].name}</h2>
      <div className="resume-container">
        <p>
          {actualRestaurant[0].address.street},{" "}
          {actualRestaurant[0].address.city},{" "}
          {actualRestaurant[0].address.state}.
        </p>
        <div>
          <p>Restaurantes alrededor: {nearRestaurants.length}</p>
          <p>
            Promedio de rating:{" "}
            {(averageRating.rating / nearRestaurants.length).toFixed(2)}
          </p>
          <p> D. E. de rating: {standardDeviation.toFixed(2)}</p>
        </div>
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
      <div className="my-2">
        <h3>Restaurantes Recomendados en la Zona</h3>
        <div className="restaurants-recommended">
          {restaurantRecommended.map((restaurant, index) => {
            if (index > 2) return null;
            return <Restaurant key={restaurant.id} restaurant={restaurant} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
