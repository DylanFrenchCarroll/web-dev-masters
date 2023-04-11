import React, { useContext, useReducer } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
    forceUpdate();
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={onUserRequest}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;
