import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { useQueries } from "react-query";
import { MoviesContext } from "../../../contexts/moviesContext";
import { getMovie } from "../../../api/tmdb-api";
import Spinner from "../../Utils/spinner";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
    avatar: {
      bgColor: "rgb(255, 0, 0)",
    },
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;
  // Add favourite icon
  const { favourites: movieIds } = useContext(MoviesContext);
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const allFavourites = favouriteMovieQueries.map((q) => q.data);
  let favourite = false;

  const object = allFavourites.find((obj) => obj.id === movie.id);

  if (object !== undefined) {
    if (object.id === movie.id) {
      favourite = true;
    }
  }

  const renderFavIcon = () => {
    if (favourite) {
      return (
        <Avatar sx={{ bgcolor: "rgb(255, 0, 0)" }}>
          <FavoriteIcon />
        </Avatar>
      );
    }
  };

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {/* Conditional Render of Favourite Icon */}
      {renderFavIcon()}

      <Typography variant="h4" component="h3">
        {movie.title}
        {"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="='large" />
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
