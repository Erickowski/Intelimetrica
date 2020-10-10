import React from "react";

const ShowRating = ({ rating }) => {
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

export default ShowRating;
