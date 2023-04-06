import React, { useContext } from "react";
import PageTemplate from "../components/templateFavouriteTVshowListPage";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { checkLogin } from "../util";
import { TvShowContext } from "../contexts/tvShowContext";
import RemoveFromFavouritesTvShowIcon from "../components/cardIcons/removeFromFavouritesTvShow";

const FavouriteTvShowPage = () => {
  checkLogin();

  const { favouriteShows: showIds } = useContext(TvShowContext);

  // Create an array of queries and run them in parallel.
  const favouriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteShowQueries.map((q) => q.data);
  const displayShows = allFavourites;

  return (
    <>
      <PageTemplate
        title="Favourite Shows"
        shows={displayShows}
        action={(show) => {
          return (
            <>
              <RemoveFromFavouritesTvShowIcon show={show} />
            </>
          );
        }}
      />
    </>
  );
};

export default FavouriteTvShowPage;
