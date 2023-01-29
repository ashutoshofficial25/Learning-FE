import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function gotoAbout() {
    navigate("/about");
  }

  return (
    <div>
      <h1>home</h1>
      <button onClick={gotoAbout}>About</button>
    </div>
  );
};

export default Home;
