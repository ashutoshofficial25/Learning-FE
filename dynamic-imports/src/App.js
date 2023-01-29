import { lazy, Suspense, useState } from "react";
import "./App.css";
// import DefaultComponents from "./DefaultComponents";
// import usernames from "./usernames";
/* webpackChunkName:utils */

const DefaultComponents = lazy(() => import("./DefaultComponents"));

function App() {
  const [usernames, setUsernames] = useState(null);
  // const onload = () => {
  //   import("./usernames").then((modules) => setUsernames(modules.default));
  //   // import("./utils").then((module) => transformToUpperCase(module));
  //   import("./utils").then(({ transformToUpperCase }) => {
  //     setUsernames((prevname) => transformToUpperCase(prevname));
  //   });
  // };

  const onload = async () => {
    const userNames = await (await import("./usernames")).default;

    const transformToUpperCase = await (
      await import("./utils")
    ).transformToUpperCase;
    setUsernames(transformToUpperCase(userNames));
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(usernames)}</h1>

      <button onClick={onload}> Load data</button>
      <Suspense fallback={<h1>Loading...</h1>}>
        <DefaultComponents />
      </Suspense>
    </div>
  );
}

export default App;
