import React from "react";
import PageTemplate from "../components/templateTVShowsListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularTVShows } from "../api/tmdb-api";
import { checkLogin } from "../util";
import AddToFavouritesTVShowIcon from "../components/cardIcons/addToFavouritesTVShow";




const PopularTVShowsPage = (props) => {
checkLogin();

  const { data, error, isLoading, isError } = useQuery(
    "popularTVShows",
    getPopularTVShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tvshows = data ? data.results : [];
  const displayedTVShows = tvshows;


  return (
    <>
      <PageTemplate
        title="Popular TV Shows"
        tvshows={displayedTVShows}
        action={(tvshow) => {
          return <AddToFavouritesTVShowIcon tvshow={tvshow} />
        }}
      />
    </> 
  );
};

export default PopularTVShowsPage;
