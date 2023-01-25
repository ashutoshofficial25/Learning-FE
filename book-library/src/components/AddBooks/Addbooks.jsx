import React, { useReducer, useState } from "react";

const Addbooks = () => {
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [genre, setGenre] = useState("");

  const [state, setState] = useState({
    title: "",
    author: "",
    genre: "",
    summary: "",
  });

  // const initialState = {
  //   title: "",
  //   author: "",
  //   genre: "",
  //   summary: "",
  // };

  // const reducer = (state, action) => {
  //   switch(action.type) {
  //     case 'title':
  //     return 'ss'
  //   }
  // }

  // const [states, dispatch] = useReducer(initialState);

  const handleInputChange = (e) => {
    if (e.target.name === "title") {
      setState({
        ...state,
        title: e.target.value,
      });
    } else if (e.target.name === "author") {
      setState({
        ...state,
        author: e.target.value,
      });
    } else if (e.target.name === "genre") {
      setState({
        ...state,
        genre: e.target.value,
      });
    } else if (e.target.name === "summary") {
      setState({
        ...state,
        summary: e.target.value,
      });
    }
  };

  const addBook = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h2>Add Book</h2>

      <form action="">
        <label className="add-books" htmlFor="title">
          Title
        </label>
        <input
          value={state.title}
          onChange={handleInputChange}
          className="add-books"
          type="text"
          name="title"
          id="title"
        />
        <label className="add-books" htmlFor="author">
          Author
        </label>
        <input
          value={state.author}
          onChange={handleInputChange}
          className="add-books"
          type="text"
          name="author"
          id="author"
        />
        <label className="add-books" htmlFor="genre">
          Genre
        </label>

        <input
          value={state.genre}
          onChange={handleInputChange}
          className="add-books"
          type="text"
          name="genre"
          id="genre"
        />
        <label className="add-books" htmlFor="summary">
          Summary
        </label>
        <input
          value={state.summary}
          onChange={handleInputChange}
          name="summary"
          id="summary"
        />

        <input className="add-books" type="text" name="summary" id="summary" />

        <button onClick={addBook} className="add-books" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbooks;
