import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import { checkLogin } from "../util";

const MovieReviewPage = (props) => {
checkLogin();

  const { state : {movie, review } } = useLocation()
  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;
