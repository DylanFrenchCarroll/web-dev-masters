import React, { useState } from "react";

export const PersonContext = React.createContext(null);

const PersonContextProvider = (props) => {
  const [favouritesPersons, setFavouritesPersons] = useState([]);

  const addToFavouritesPersons = (person) => {
    let updatedFavourites = [...favouritesPersons];
    if (!favouritesPersons.includes(person.id)) {
      updatedFavourites.push(person.id);
    }
    setFavouritesPersons(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavouritesPerson = (person) => {
    setFavouritesPerson(favouritesPersons.filter((mId) => mId !== person.id));
  };

  return (
    <PersonContext.Provider
      value={{
        favouritesPersons,
        removeFromFavouritesPerson,
        addToFavouritesPersons,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
