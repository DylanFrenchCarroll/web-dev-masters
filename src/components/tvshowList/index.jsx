import React from "react";
import Grid from "@mui/material/Grid";
import TvShowCard from "../tvShowCard";

const TvShowList = ( {tvshows, action }) => {
  let showCards = tvshows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShowCard key={m.id} show={m} action={action} />
    </Grid>
  ));
  return showCards;
};

export default TvShowList;
