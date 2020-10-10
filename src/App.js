import React, { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./components/Header";
import ListRestaurant from "./components/ListRestaurant";
import Formulario from "./components/Formulario";

function App() {
  const [restaurants, saveRestaurants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await Axios(
        "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"
      );
      saveRestaurants(result.data);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <h2 className="text-center mt-4">Encuentra tu restaurante favorito</h2>
      <Formulario restaurants={restaurants} saveRestaurants={saveRestaurants} />
      <ListRestaurant restaurants={restaurants} />
    </>
  );
}

export default App;
