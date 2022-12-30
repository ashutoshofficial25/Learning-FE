import React from "react";
import BreadLower from "./BurgerComponents/BreadLower/BreadLower";
import BreadUpper from "./BurgerComponents/BreadUpper/BreadUpper";
import { burgerConponentEnum } from "./resourses";
import Tomato from "./BurgerComponents/Tomato/Tomato";
import Cheese from "./BurgerComponents/Cheese/Cheese";
import Lattuce from "./BurgerComponents/Lattuce/Lattuce";

const CreateBurger = ({ burgerStack }) => {
  const BurgerStack = burgerStack.map((item, i) => {
    switch (item) {
      case burgerConponentEnum.CHEESE:
        return <Cheese />;
      case burgerConponentEnum.LETTUCE:
        return <Lattuce />;
      case burgerConponentEnum.TOMATO:
        return <Tomato />;
      default:
        return null;
    }
  });

  return (
    <div style={{ padding: "15% 25%" }}>
      <BreadUpper />

      {BurgerStack}

      <BreadLower />
    </div>
  );
};

export default CreateBurger;
