import React from "react";
import { Link } from "react-router-dom";
import ShowRating from "./ShowRating";

const Restaurant = ({ restaurant }) => {
  return (
    <>
      <div className="card border-primary m-2">
        <div className="card-body">
          <h4 className="card-title">{restaurant.name}</h4>
          <p className="card-text">
            Rating:{" "}
            <span>
              <ShowRating rating={restaurant.rating}></ShowRating>
            </span>
          </p>
          <Link to={`/restaurant/${restaurant.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
        <div className="card-footer">
          <a
            href={restaurant.contact.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-desktop"></i>
          </a>
          <a
            href={`mailto:${restaurant.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-at"></i>
          </a>
          <a
            href={`tel:${restaurant.contact.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
