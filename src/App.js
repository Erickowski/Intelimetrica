import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import ListRestaurant from "./components/ListRestaurant";
import Formulario from "./components/Formulario";
import RestaurantDetail from "./components/RestaurantDetail";

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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Formulario
            restaurants={restaurants}
            saveRestaurants={saveRestaurants}
          />
          <ListRestaurant restaurants={restaurants} />
        </Route>
        <Route exact path="/restaurant/:id">
          <RestaurantDetail restaurants={restaurants} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
