import React from "react";
import PageTemplate from "../components/templatePersonListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularPersons } from "../api/tmdb-api";

const PopularPersonsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "popularPersons",
    getPopularPersons
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];
  const displayedPeople = people;
  const movie = "test";

  return (
    <>
      <PageTemplate
        title="Popular People"
        persons={displayedPeople}
        // action={(person) => {
        //   return <AddToWatchList movie={person} />
        // }}
      />
    </>
  );
};

export default PopularPersonsPage;
