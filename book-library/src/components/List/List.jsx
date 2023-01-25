import React from "react";
import Card from "../Card/Card";
import "./list.css";

const List = ({ books }) => {
  return (
    <div className="list">
      {books.data.map((book) => {
        return (
          <div key={book?.id}>
            <Card {...book} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
