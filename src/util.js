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
  // const context = useContext(MoviesContext);
  // context.addToFavourites(movie);
  writeToFavouritesAPI( movie.id)
  writeToFavouritesDB(user, movie.id);
}

export async function retrieveFavourites(user) {
  let movies = getFavsAPI();
  // await retrieveFavouritesDB(user).then( (res) => {
  //   movies =  res.favouriteMovies
  // });
  console.log(favourites)
  return movies;

}

function getFavsAPI() {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(`${import.meta.env.VITE_API_URL}/api/accounts/${id}/movies/favourites` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });

}

export function removeFromFavouritesUtil(user, movie) {
  removeFromFavouritesDB(user, movie.id);
}

export function writeToFavouritesAPI(id) {
  const user = JSON.parse(localStorage.getItem("authUser"));
  console.log(user)
  fetch( `${import.meta.env.VITE_API_URL}/api/accounts/${user.uid}/movies/favourites`, {
  method: "POST",
  body: JSON.stringify({
    movieId: id,
  }),
  headers: {
    Authorization: `Bearer ${user.stsTokenManager.accessToken}`,
    "Content-type": "application/json; charset=UTF-8"
  }
});
}
