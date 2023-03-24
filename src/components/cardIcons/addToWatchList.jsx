import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchList = ({ movie }) => {
  const context = useContext(MoviesContext);
  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToMustWatches(movie);
  };
  return (
    <IconButton aria-label="add to must watch list" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchList;
