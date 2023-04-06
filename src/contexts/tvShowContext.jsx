import React, { useState } from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
  const [favouriteShows, setFavouriteShows] = useState([]);

  const addToFavouriteShows = (show) => {
    let updatedFavourites = [...favouriteShows];
    if (!favouriteShows.includes(show.id)) {
      updatedFavourites.push(show.id);
    }
    setFavouriteShows(updatedFavourites);
  };

  const removeFromFavouriteShows = (show) => {
    setFavouriteShows(favouriteShows.filter((mId) => mId !== show.id));
  };

  return (
    <TvShowContext.Provider
      value={{
        favouriteShows,
        removeFromFavouriteShows,
        addToFavouriteShows,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  );
};

export default TvShowContextProvider;
