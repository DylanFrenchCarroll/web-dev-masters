import React from "react";
import { useParams } from "react-router-dom";
import TvShowDetails from "../components/TVShows/tvShowDetails";
import { getShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/Utils/spinner";
import PageTemplate from "../components/TVShows/templateTvShowPage";
import { checkLogin } from "../util";

const TvShowDetailsPage = () => {
  checkLogin();

  const { id } = useParams();

  const {
    data: show,
    error,
    isLoading,
    isError,
  } = useQuery(["show", { id: id }], getShow);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <TvShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for details</p>
      )}
    </>
  );
};

export default TvShowDetailsPage;
