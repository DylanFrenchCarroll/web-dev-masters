import React, {useEffect, useReducer} from "react";
import Person from "../../../personCardFavourite";
import Grid from "@mui/material/Grid";
import TvShow from "../../../tvShowCardFavourite"


const TvShowList = ( {shows, action }) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const increaseRank = (index) => {
    if(index != 0  ){
      [shows[index-1], shows[index]] = [shows[index], shows[index-1]];
    }
    forceUpdate();
  };

  const decreaseRank = (index) => {
   if(index != shows.length -1  ){
      [shows[index+1], shows[index]] = [shows[index], shows[index+1]];
    }
    forceUpdate();
  };


  let showCards = shows.map((p, index) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShow increaseRank={increaseRank} decreaseRank={decreaseRank}  key={p.id} show={p} action={action} index={index} />
    </Grid>
  ));
  return showCards;
};

export default TvShowList;
 