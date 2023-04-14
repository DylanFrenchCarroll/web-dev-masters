import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PersonContext } from "../../contexts/personContext";

const AddToFavouritesPersonIcon = ({ person }) => {
  const context = useContext(PersonContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavouritesPersons(person);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesPersonIcon;
