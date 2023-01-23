import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

const UserDetail = () => {
  const { user } = useSelector((state) => state.user);
  // const user = selectUser();

  const dispatch = useDispatch();

  console.log(user);
  const logOut = () => {
    dispatch(
      logout({
        user: null,
      })
    );
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {!user ? (
        <p>no user found</p>
      ) : (
        <>
          <h1>user: {user.user_name}</h1>
          <h2>Email:{user.user_email}</h2>
          <button onClick={logOut}>logout</button>
        </>
      )}
    </div>
  );
};

export default UserDetail;
