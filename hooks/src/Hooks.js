import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

const getUSer = () =>
  fetch("./user.json")
    .then((response) => response.json)
    .then((data) => console.log(data));

function hooks() {
  const [name, setName] = useState("");
  const [roles, setROles] = useState(null);
  const [roleList, setRoleList] = useState(null);

  useEffect(() => {
    if (name) {
      setRoleList(Object.keys(roles).filter((item) => roles[item]));
    }
  }, [name, roles]);

  const loadUser = async () => {
    const data = await getUSer();
    if (data) {
      setName(data.name);
      setROles(data.roles);
    }
  };

  // const loadUser = () => {
  //   setName("user1");
  //   setROles({
  //     reader: true,
  //   });
  //   setRoleList([]);
  // };

  return (
    <div className="hooks">
      {/* <Counter /> */}

      <h1> User details</h1>
      <h3>{JSON.stringify(name)}</h3>
      <h3>{JSON.stringify(roles)}</h3>
      <h3>{JSON.stringify(roleList)}</h3>
      <button onClick={loadUser}> Load user</button>
    </div>
  );
}

export default hooks;
