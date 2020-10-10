import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-alert">
        <Link to="/">
          <h1>Melp</h1>
        </Link>
      </header>
      <h2 className="text-center mt-4">Encuentra tu restaurante favorito</h2>
    </>
  );
};

export default Header;
