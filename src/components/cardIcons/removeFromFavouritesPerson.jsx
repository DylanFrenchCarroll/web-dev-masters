import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { PersonContext } from "../../contexts/personContext";

const RemoveFromFavouritesPersonIcon = ({ person }) => {
  const context = useContext(PersonContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavouritesPerson(person);
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouritesPersonIcon;
