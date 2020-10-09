import React, { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./components/Header";

function App() {
  const [restaurants, saveRestaurants] = useState({});
  const [pages, savePages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const result = await Axios(
        "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"
      );
      saveRestaurants(result.data);
      savePages(result.data.length / 5);
    };
    getData();
  }, []);
  return <Header />;
}

export default App;
