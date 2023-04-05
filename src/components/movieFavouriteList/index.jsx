import React, {useReducer} from "react";
import Movie from "../movieFavouriteCard";
import Grid from "@mui/material/Grid";

const MovieFavouriteList = ( {movies, action }) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const increaseRank = (index) => {
    if(index != 0  ){
      [movies[index-1], movies[index]] = [movies[index], movies[index-1]];
    }
    forceUpdate();
  };

  const decreaseRank = (index) => {
   if(index != movies.length -1  ){
      [movies[index+1], movies[index]] = [movies[index], movies[index+1]];
    }
    forceUpdate();
  };

  let movieCards = movies.map((m, index) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie increaseRank={increaseRank} decreaseRank={decreaseRank} key={m.id} movie={m} action={action} index={index} />
    </Grid>
  ));
  return movieCards;
};

export default MovieFavouriteList;
