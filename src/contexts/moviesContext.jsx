import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { writeToFavourites, retrieveFavourites, removeFromFavouritesUtil } from "../util";
import { auth } from "../firebase";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [mustWatches, setMustWatches] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [user, loading, error] = useAuthState(auth);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
    let items = JSON.parse(localStorage.getItem("favourites")) ?? [];
    items.push(movie.id)
    localStorage.setItem("favourites", JSON.stringify(items))
    writeToFavourites(user, movie);
  };

  const addToMustWatches = (movie) => {
    let updatedMustWatches = [...mustWatches];

    if (!mustWatches.includes(movie.id)) {
      updatedMustWatches.push(movie.id);
    }
    setMustWatches(updatedMustWatches);
  };

  const removeFromMustWatches = (movie) => {
    setMustWatches(mustWatches.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    removeFromFavouritesUtil(user, movie);
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatches,
        addToMustWatches,
        removeFromMustWatches,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
