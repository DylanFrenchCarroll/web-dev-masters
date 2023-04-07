import truncate from "lodash/truncate";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useContext } from "react";
import {
  writeToFavouritesDB,
  retrieveFavouritesDB,
  removeFromFavouritesDB,
} from "./firebase";
import { MoviesContext } from "./contexts/moviesContext";

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
  return user ? true : false;
}

export function userDetails() {
  const [user, loading, error] = useAuthState(auth);
  return user ?? null;
}

export function writeToFavourites(user, movie) {
  const context = useContext(MoviesContext);
  context.addToFavourites(movie);
  writeToFavouritesDB(user, movie.id);
}

export async function retrieveFavourites(user) {
  let movies;
  await retrieveFavouritesDB(user).then( (res) => {
    movies =  res.favouriteMovies
  });
  return movies;
}

export function removeFromFavourites(user, movie) {
  removeFromFavouritesDB(user, movie.id);
}
