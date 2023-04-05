import truncate from "lodash/truncate";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect } from "react";


export function excerpt(string) {
  return truncate(string, {
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function checkLogin() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, loading]);
}

export function loggedIn() {
  const [user, loading, error] = useAuthState(auth);
  return user ? true : false
    // if (user) {
    //   return true;
    // }else{
    //   return false
    // }
}
