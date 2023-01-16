import { useEffect, useState } from "react";
import "./App.css";
import useFetchData from "./customHookes/useFetchData";

function custom() {
  const [users] = useFetchData("https://jsonplaceholder.typicode.com/users");
  const [dog] = useFetchData("https://dog.ceo/api/breeds/image/random");

  // console.log(users);
  //for making a request and fetching a resource
  // it can take more arguments but one madorety argument is path
  // it returns a promise along with promise of that request
  // we fetch json file accross the network
  // it returns a representation of that reaponse
  // we extract the json body content form response object

  let url = "https://jsonplaceholder.typicode.com/users";
  // https://dog.ceo/api/breeds/image/random

  return (
    <div className="custom">
      <h2>{users[0]?.name}</h2>
      {users && users.map((user) => <h2 key={user?.name}>{user?.name}</h2>)}
      <img src={dog.message} width="400px" />
    </div>
  );
}

export default custom;
