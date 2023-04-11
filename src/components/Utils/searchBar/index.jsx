import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { searchMovie } from "../../../api/tmdb-api";
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.nativeEvent);
    let query = e.nativeEvent.target[0].value;
    searchMovie(query).then((res) => {
      localStorage.removeItem("searchResults");
      localStorage.setItem("searchResults", JSON.stringify(res.results));
      navigate("/search/results");
    });

    // Navigate here
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="test"
          label="Enter movie name"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <Button type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default SearchBar;
