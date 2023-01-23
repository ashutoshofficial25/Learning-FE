import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import UserDetail from "./component/User/UserDetail";
import { login, userList } from "./features/userSlice";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const dispatch = useDispatch();

  const getUserDetails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    setUserDetails(data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    dispatch(
      userList({
        userList: userDetails,
      })
    );
  }, [userDetails]);

  return (
    <div className="app">
      <form
        className="form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="name" className="">
          Name
        </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email" className="">
          Email
        </label>
        <input type="email" name="email" id="email" />
      </form>

      <UserDetail />
    </div>
  );
}

export default App;
