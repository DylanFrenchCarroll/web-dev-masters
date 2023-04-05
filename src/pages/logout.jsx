import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem('authUser');
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  

  return (
    <>
      <nav>
        <p>Welcome Home</p>

        <div>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
      </nav>
    </>
  );
};

export default Logout;
