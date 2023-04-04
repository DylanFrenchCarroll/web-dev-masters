import React, { useContext }  from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { useQueries } from "react-query";
import { MoviesContext } from "../../contexts/moviesContext";
import { getMovie } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";


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

const PersonHeader = (props) => {
  const person = props.person;

    return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      
      <Typography variant="h4" component="h3">
        {person.name}{"   "}
        <a href={person.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default PersonHeader;
