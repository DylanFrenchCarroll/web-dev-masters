import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
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

const TvShowDetails = ({ show }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  console.log(show);
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label="Production Companies"
            sx={styles.chipLabel}
            color="primary"
          />
        </li>
        {show.production_companies.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label="Production Countries"
            sx={styles.chipLabel}
            color="primary"
          />
        </li>
        {show.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Languages" sx={styles.chipLabel} color="primary" />
        </li>
        {show.spoken_languages.map((g) => (
          <li key={g.english_name}>
            <Chip label={g.english_name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<AccessTimeIcon />}
          label={`${show.episode_run_time} min.`}
        />
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count} votes)`}
        />
        <Chip label={`Released: ${show.first_air_date}`} />
        <Chip label={`Seasons: ${show.number_of_seasons}`} />
        <Chip label={`Episodes: ${show.number_of_episodes}`} />
      </Paper>
    </>
  );
};
export default TvShowDetails;
