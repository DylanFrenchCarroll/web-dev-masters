import React from "react";
import PageTemplate from "../../components/Persons/templatePersonListPage";
import { useQuery } from "react-query";
import Spinner from "../../components/Utils/spinner";
import { getPopularPersons } from "../../api/tmdb-api";
import { checkLogin } from "../../util";
import AddToFavouritesPersonIcon from "../../components/cardIcons/addToFavouritesPerson";

const PopularPersonsPage = (props) => {
  checkLogin();

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

  return (
    <>
      <PageTemplate
        title="Popular People"
        persons={displayedPeople}
        action={(person) => {
          return <AddToFavouritesPersonIcon person={person} />;
        }}
      />
    </>
  );
};

export default PopularPersonsPage;
