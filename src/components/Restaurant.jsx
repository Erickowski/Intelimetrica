import React from "react";

const Restaurant = ({ restaurant }) => {
  const showRating = (rating) => {
    switch (rating) {
      case 0:
        return (
          <>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </>
        );
      case 1:
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </>
        );
      case 2:
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </>
        );
      case 3:
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </>
        );
      case 4:
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="card border-primary m-2">
        <div className="card-body">
          <h4 className="card-title">{restaurant.name}</h4>
          <p className="card-text">
            Rating: <span>{showRating(restaurant.rating)}</span>
          </p>
          <button type="button" className="btn btn-primary">
            Ver más
          </button>
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
