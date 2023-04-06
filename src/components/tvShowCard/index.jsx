import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from '@mui/icons-material/Check';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  avatar2: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function TvShowCard({ show, action }) {
  
  // const { favourites, addToFavourites } = useContext(MoviesContext);
  // const { mustWatches, addToMustWatches } = useContext(MoviesContext);


  // if (favourites.find((id) => id === movie.id)) {
  //   movie.favourite = true;
  // } else {
  //   movie.favourite = false
  // }

  // if (mustWatches.find((id) => id === movie.id)) {
  //   movie.mustWatch = true;
  // } else {
  //   movie.mustWatch = false
  // }



  return (
    <Card sx={styles.card}>
         <CardHeader
      sx={styles.header}
      avatar={
        show.favourite ? (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) :  null
      }
      title={
        <Typography variant="h5" component="p">
          {show.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        sx={styles.media}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
             {action(show)}
        <Link to={`/shows/${show.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
 