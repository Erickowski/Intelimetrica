import React from "react";

const Formulario = ({ restaurants, saveRestaurants }) => {
  const handleOrder = (e) => {
    if (e.target.value === "alpha") {
      saveRestaurants([
        ...restaurants.sort(
          (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
        ),
      ]);
    }
    if (e.target.value === "rating") {
      saveRestaurants([...restaurants.sort((a, b) => b.rating - a.rating)]);
    }
  };
  return (
    <form className="container d-flex justify-content-between mt-4">
      <label htmlFor="order">Ordena alfabéticamente o por rating</label>
      <select
        onChange={(e) => handleOrder(e)}
        className="form-control"
        id="order"
      >
        <option value="">-- Seleccione ---</option>
        <option value="alpha">Alfabéticamente</option>
        <option value="rating">Rating</option>
      </select>
    </form>
  );
};

export default Formulario;
