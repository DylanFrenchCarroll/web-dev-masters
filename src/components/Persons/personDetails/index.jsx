import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const PersonDetails = ({ person }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip label={`Date of Birth: ${person.birthday}`} />
        <Chip label={`Place of Birth: ${person.place_of_birth}`} />
      </Paper>
    </>
  );
};
export default PersonDetails;
