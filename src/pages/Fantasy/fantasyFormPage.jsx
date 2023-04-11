import React from "react";
import PageTemplate from "../../components/Persons/templatePersonListPage";
import { useQuery } from "react-query";
import Spinner from "../../components/Utils/spinner";
import { getPopularPersons } from "../../api/tmdb-api";
import { checkLogin } from "../../util";
import AddToFavouritesPersonIcon from "../../components/cardIcons/addToFavouritesPerson";
import FantasyForm from "../../components/Fantasy/fantasyForm";

const FantasyFormPage = (props) => {
  checkLogin();

  return (
    <>
    <FantasyForm></FantasyForm>
    </>
  );
};

export default FantasyFormPage;
