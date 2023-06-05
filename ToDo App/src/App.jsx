import React from "react";

import Home from "./components/Home";
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container}>
      <Home />
    </div>
  );
};

export default App;
