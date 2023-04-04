import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import PersonList from "../personList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function PersonListPageTemplate({ persons, title, action }) {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <PersonList action={action} persons={persons} />
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;
