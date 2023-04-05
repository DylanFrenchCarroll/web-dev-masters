import React, { useContext } from "react";
import PageTemplate from "../components/templatePersonListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie, getPerson } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../components/movieFilterUI";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import RemoveFromFavouritesPersonIcon from "../components/cardIcons/removeFromFavouritesPerson";
import WriteReview from "../components/cardIcons/writeReview";
import { checkLogin } from "../util";
import { PersonContext } from "../contexts/personContext" 


const FavouritePersonPage = () => {

  checkLogin();



  const { favouritesPersons: personIds } = useContext(PersonContext);



  // Create an array of queries and run them in parallel.
  const favouritePersonQueries = useQueries(
    personIds.map((personId) => {
      return {
        queryKey: ["person", { id: personId }],
        queryFn: getPerson,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouritePersonQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouritePersonQueries.map((q) => q.data);
  const displayPersons = allFavourites



  return (
    <>
      <PageTemplate
        title="Favourite Movies"
        persons={displayPersons}
        action={(person) => {
          return (
            <>
              <RemoveFromFavouritesPersonIcon person={person} />
            </>
          );
        }}
      />
    </>
  );
};

export default FavouritePersonPage;
