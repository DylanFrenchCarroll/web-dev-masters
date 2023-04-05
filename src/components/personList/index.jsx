import React from "react";
import Person from "../personCard";
import Grid from "@mui/material/Grid";

const PersonList = ( {persons,action }) => {
  let personCards = persons.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={p.id} person={p} action={action} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;
 