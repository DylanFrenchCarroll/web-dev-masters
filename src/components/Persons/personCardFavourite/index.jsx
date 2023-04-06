import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";

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

export default function PersonCardFavourite({
  person,
  action,
  index,
  increaseRank,
  decreaseRank,
}) {
  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p">
            {index + 1} - {person.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
            : img
        }
      />

      <CardActions disableSpacing>
        {action(person)}

        <Link to={`/persons/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Info
          </Button>
        </Link>

        <Button
          onClick={(event) => increaseRank(index)}
          variant="outlined"
          size="medium"
          color="primary"
        >
          +
        </Button>
        <Button
          onClick={(event) => decreaseRank(index)}
          variant="outlined"
          size="medium"
          color="primary"
        >
          -
        </Button>
      </CardActions>
    </Card>
  );
}
