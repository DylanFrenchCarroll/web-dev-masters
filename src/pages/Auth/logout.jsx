import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("authUser");
  localStorage.removeItem("favourites");
  signOut(auth)
    .then(() => {
      navigate("/login");
    })
    .catch((error) => {
      console.log("error")
      console.log(error)
      // An error happened.
    });

  return (
    <>
    </>
  );
};

export default Logout;
