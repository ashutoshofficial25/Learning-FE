import React from "react";
import "./calander.css";
function Calander() {
  return (
    <div className="calander-container">
      <div className="calander-inner-container">
        <h2>Calander</h2>
        <div className="calander-display">
          <div className="month-header">
            <div className="left-arrow">{"<"}</div>
            <div id="month">Jan, 2022</div>
            <div className="right-arrow">{">"}</div>
          </div>
          <div className="calander-container-child">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
          <div className="calander-container-child">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calander;
