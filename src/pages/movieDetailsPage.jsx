import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieVideo } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { checkLogin } from "../util";

const MovieDetailsPage = () => {
  checkLogin();

  const { id } = useParams();

  const { data: video } = useQuery(["movieVideo", { id: id }], getMovieVideo);

  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  let loaded = false;
  if (movie && video) {
    loaded = true;
  }
  return (
    <>
      {loaded ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails video={video} movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
