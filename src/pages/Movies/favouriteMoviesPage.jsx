import React, { useContext } from "react";
import PageTemplate from "../../components/Movies/templateFavouriteMovieListPage";
import { MoviesContext } from "../../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../../api/tmdb-api";
import Spinner from "../../components/Utils/spinner";
import useFiltering from "../../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../../components/Movies/movieFilterUI";
import RemoveFromFavourites from "../../components/cardIcons/removeFromFavourites";
import WriteReview from "../../components/cardIcons/writeReview";
import { checkLogin } from "../../util";
import { retrieveFavourites } from "../../util";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (movie, value) {
    // Is user selected genre in this movies's genre list?
    // Always true if selected genre ia All (0).
    const genreId = Number(value);
    const genre_ids = movie.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const FavouriteMoviesPage = () => {
  checkLogin();
  const [user, loading, error] = useAuthState(auth);

  const { favourites: movieIds } = useContext(MoviesContext);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

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
  const displayMovies = allFavourites ? filterFunction(allFavourites) : [];

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
        movies={displayMovies}
        action={(movie) => {
          return (
            <>
              <RemoveFromFavourites movie={movie} />
              <WriteReview movie={movie} />
            </>
          );
        }}
      />

      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default FavouriteMoviesPage;
