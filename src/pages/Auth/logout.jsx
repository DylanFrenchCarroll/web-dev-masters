import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      localStorage.removeItem("authUser");
      navigate("/login");
    })
    .catch((error) => {
      // An error happened.
    });

  return (
    <>
    </>
  );
};

export default Logout;
