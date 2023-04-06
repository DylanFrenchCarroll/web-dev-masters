import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { PersonContext } from "../../contexts/personContext";
import { TvShowContext } from "../../contexts/tvShowContext";

const RemoveFromFavouritesTvShowIcon = ({ show }) => {
  const context = useContext(TvShowContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavouriteShows(show);
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

export default RemoveFromFavouritesTvShowIcon;
