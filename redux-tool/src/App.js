import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import UserDetail from "./component/User/UserDetail";
import { login } from "./features/userSlice";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  const loginSubmit = (e) => {
    e.preventDefault();
    //userloggind
    console.log("name:", nameRef.current.value);
    console.log("email:", emailRef.current.value);

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    dispatch(
      login({
        user_name: name,
        user_email: email,
      })
    );
    nameRef.current.value = null;
    emailRef.current.value = null;
  };

  return (
    <div className="app">
      <form
        className="form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="name" className="">
          Name
        </label>
        <input ref={nameRef} type="text" name="name" id="name" />
        <label htmlFor="email" className="">
          Email
        </label>
        <input ref={emailRef} type="email" name="email" id="email" />

        <button onClick={loginSubmit} type="submit">
          Submit
        </button>
      </form>

      <UserDetail />
    </div>
  );
}

export default App;
