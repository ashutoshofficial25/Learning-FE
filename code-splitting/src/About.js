import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div>
      a<h1>About</h1>
      <button onClick={gotoHome}>Home</button>
    </div>
  );
};

export default About;
