import React from "react";
import "./card.css";
const Card = ({ id, title, author, genre, Summary }) => {
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <div>
        <p>Author : {author}</p>
        <p>Grene : {genre}</p>
        <p>Summary : {Summary}</p>
      </div>
      <div className="card-button">
        <button className="button">edit</button>
        <button className="button">delete</button>
      </div>
    </div>
  );
};

export default Card;
