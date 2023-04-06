import React from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../../components/Persons/personDetails";
import { getPerson } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../../components/Utils/spinner";
import PageTemplate from "../../components/Persons/templatePersonPage";
import { checkLogin } from "../../util";

const PersonDetailsPage = () => {
  checkLogin();

  const { id } = useParams();

  const {
    data: person,
    error,
    isLoading,
    isError,
  } = useQuery(["person", { id: id }], getPerson);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;
