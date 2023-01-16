import React, { createContext, useContext } from "react";

//1. Create a new context
const UserContext = createContext();
console.log(UserContext);

//2.use a provider to wrap the component
const App = () => {
  return (
    <UserContext.Provider value="James Bond">
      <div>
        <User />
      </div>
    </UserContext.Provider>
  );
};

function User() {
  // const contextValue = useContext(UserContext);
  // console.log(contextValue);
  return (
    // <UserContext.Consumer> {(value) => <h1>{value}</h1>}</UserContext.Consumer>
    <>
      <User1 />
      <User2 />
    </>
  );
}

function User1() {
  return (
    <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}
function User2() {
  const user = useContext(UserContext);
  return <h2> {user}</h2>;
}

export default App;
