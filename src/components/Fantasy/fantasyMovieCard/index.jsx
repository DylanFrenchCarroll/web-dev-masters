import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../../contexts/moviesContext";

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

export default function MovieCard({ movie, action }) {


  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p">
            Title: {movie.title}{"  ("}{movie.length}{"mins)"}
          </Typography>
        }
      />
      <CardContent>
        <Grid container>
        <Grid item xs={12}>
            <Typography variant="h6" component="p">
                Genre: {movie.genre} 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
                Overview: {movie.overview} 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
                Cast: {movie.cast} 
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
