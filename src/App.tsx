import React from "react";
import "./App.css";
import NameOfConstruction from "./NameOfConstruction";

const App = () => {
  return (
    <div className="App">
      <NameOfConstruction
        productName="Billboard"
        productDescription="Рекламная конструкция рассчитанная, в основном, на автомобильный траффик"
        picture="/billboard.jpg"
      />
      <NameOfConstruction
        productName="Supersite"
        productDescription="Рекламная конструкция большого размера, несущая в себе имиджевую составляющую"
        picture="/supersite.jpg"
      />
      <NameOfConstruction
        productName="City-Format"
        productDescription="Рекламная конструкция малого формата , рассчитаная на пешходный траффик"
        picture="/city_format.jpg"
      />
    </div>
  );
};

export default App;
