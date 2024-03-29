import React from "react";
import PageTemplate from "../../components/Movies/templateMoviePage";
import ReviewForm from "../../components/Reviews/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../../api/tmdb-api";
import Spinner from "../../components/Utils/spinner";
import { checkLogin } from "../../util";

const WriteReviewPage = (props) => {
  checkLogin();

  const location = useLocation();
  const { movieId } = location.state;
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: movieId }], getMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default WriteReviewPage;
