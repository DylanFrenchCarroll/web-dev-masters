import React, { useReducer } from "react";
import Grid from "@mui/material/Grid";
import TvShowCard from "../tvShowFavouriteCard";

const TvShowFavouriteList = ({ tvshows, action }) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const increaseRank = (index) => {
    if (index != 0) {
      [tvshows[index - 1], tvshows[index]] = [
        tvshows[index],
        tvshows[index - 1],
      ];
    }
    forceUpdate();
  };

  const decreaseRank = (index) => {
    if (index != tvshows.length - 1) {
      [tvshows[index + 1], tvshows[index]] = [
        tvshows[index],
        tvshows[index + 1],
      ];
    }
    forceUpdate();
  };

  let showCards = tvshows.map((m, index) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShowCard
        increaseRank={increaseRank}
        decreaseRank={decreaseRank}
        key={m.id}
        show={m}
        action={action}
        index={index}
      />
    </Grid>
  ));
  return showCards;
};

export default TvShowFavouriteList;
