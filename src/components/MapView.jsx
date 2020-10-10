import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import ShowRating from "./ShowRating";

const MapView = ({ actualRestaurant, restaurants }) => {
  const options = [
    actualRestaurant[0].address.location.lat,
    actualRestaurant[0].address.location.lng,
  ];
  const mapRestaurants = restaurants.filter(
    (restaurant) => restaurant.id !== actualRestaurant[0].id
  );
  return (
    <Map center={options} zoom={20} keyboard={false}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapRestaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          opacity={0.5}
          position={[
            restaurant.address.location.lat,
            restaurant.address.location.lng,
          ]}
        >
          <Popup>
            {restaurant.name}
            <br />
            <ShowRating rating={restaurant.rating} />
          </Popup>
        </Marker>
      ))}
      <Marker position={options}>
        <Popup>
          {actualRestaurant[0].name}
          <br />
          <ShowRating rating={actualRestaurant[0].rating} />
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapView;
