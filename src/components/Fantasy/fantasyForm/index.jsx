import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { writeToFantasyDB } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function FantasyForm() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let fantasyMovie = {
      title: data.get("title"),
      genre: data.get("genre"),
      length: data.get("length"),
      overview: data.get("overview"),
      cast: data.get("cast"),
    };
    navigate("/fantasy/list");

    writeToFantasyDB(user, fantasyMovie);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LocalMoviesIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create your fantasy movie!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="genre"
              label="Genre"
              type="genre"
              id="genre"
            />
            <TextField
              type="number"
              margin="normal"
              required
              fullWidth
              name="length"
              label="Length (min)"
              id="length"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              maxRows={6}
              minRows={4}
              name="overview"
              label="Overview"
              type="overview"
              id="overview"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              maxRows={4}
              minRows={3}
              name="cast"
              label="Cast"
              type="cast"
              id="cast"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Fantasy Movie
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
