import React from "react";
import PageTemplate from "../../components/Movies/templateMovieListPage";
import { checkLogin } from "../../util";
import AddToFavouritesIcon from "../../components/cardIcons/addToFavourites";


const SearchResults = (props) => {
  checkLogin();
  const displayedMovies = JSON.parse(localStorage.getItem("searchResults"));
  return (
    <>
      <PageTemplate
        title="Search Results"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />;
        }}
      />
    </>
  );
};

export default SearchResults;
