import React, {useEffect, useReducer} from "react";
import Person from "../personCardFavourite";
import Grid from "@mui/material/Grid";



const PersonList = ( {persons, action }) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const increaseRank = (index) => {
    if(index != 0  ){
      [persons[index-1], persons[index]] = [persons[index], persons[index-1]];
    }
    forceUpdate();
  };

  const decreaseRank = (index) => {
   if(index != persons.length -1  ){
      [persons[index+1], persons[index]] = [persons[index], persons[index+1]];
    }
    forceUpdate();
  };


  let personCards = persons.map((p, index) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person increaseRank={increaseRank} decreaseRank={decreaseRank}  key={p.id} person={p} action={action} index={index} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;
 