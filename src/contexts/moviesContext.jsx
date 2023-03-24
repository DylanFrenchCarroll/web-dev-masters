import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [mustWatches, setMustWatches] = useState([]);
  const [myReviews, setMyReviews] = useState( {} )

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToMustWatches = (movie) => {
    let updatedMustWatches = [...mustWatches];
    console.log(updatedMustWatches)

    if (!mustWatches.includes(movie.id)) {
      updatedMustWatches.push(movie.id);
    }
    setMustWatches(updatedMustWatches);
  };

  const removeFromMustWatches = (movie) => {
    setMustWatches(mustWatches.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {   
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
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
        removeFromMustWatches
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
