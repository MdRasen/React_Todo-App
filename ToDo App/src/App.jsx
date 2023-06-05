import React from "react";

import Home from "./components/Home";
import Style from './App.module.css'

const App = () => {
  return (
    <div className={Style.container}>
      <Home />
    </div>
  );
};

export default App;
