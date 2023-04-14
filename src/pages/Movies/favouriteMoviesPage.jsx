import React, { useContext } from "react";
import PageTemplate from "../../components/Movies/templateFavouriteMovieListPage";
import { MoviesContext } from "../../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../../api/tmdb-api";
import Spinner from "../../components/Utils/spinner";
import useFiltering from "../../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
} from "../../components/Movies/movieFilterUI";
import RemoveFromFavourites from "../../components/cardIcons/removeFromFavourites";
import WriteReview from "../../components/cardIcons/writeReview";
import { checkLogin } from "../../util";
import { retrieveFavourites } from "../../util";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const FavouriteMoviesPage = () => {
  checkLogin();
  const [user, loading, error] = useAuthState(auth);

  const movieIds = JSON.parse(localStorage.getItem("favourites"));
  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteMovieQueries.map((q) => q.data);
  const displayMovies = allFavourites;

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Favourite Movies"
        movies={allFavourites}
        action={(movie) => {
          return (
            <>
              <RemoveFromFavourites movie={movie} />
              <WriteReview movie={movie} />
            </>
          );
        }}
      />
    </>
  );
};

export default FavouriteMoviesPage;
