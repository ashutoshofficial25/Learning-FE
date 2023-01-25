import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import axios from "axios";
import Addbooks from "./components/AddBooks/Addbooks";

const url = "http://localhost:3002/books";
function App() {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const data = await axios.get(url);
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <div className="list-book">{books.data && <List books={books} />}</div>

        <div className="add-bk">
          <Addbooks />
        </div>
      </div>
    </div>
  );
}

export default App;
