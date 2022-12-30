import React from "react";
import BreadLower from "./BurgerComponents/BreadLower/BreadLower";
import BreadUpper from "./BurgerComponents/BreadUpper/BreadUpper";

const CreateBurger = () => {
  return (
    <div style={{ padding: "15% 25%" }}>
      <BreadUpper />
      <BreadLower />
    </div>
  );
};

export default CreateBurger;
