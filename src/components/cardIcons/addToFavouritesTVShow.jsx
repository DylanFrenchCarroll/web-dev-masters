import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TvShowContext } from "../../contexts/tvShowContext";

const AddToFavouritesTVShowIcon = ({ tvshow }) => {
  const context = useContext(TvShowContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavouriteShows(tvshow);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesTVShowIcon;
