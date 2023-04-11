import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { loggedIn } from "../../../util";
import HeaderDropDown from "../headerDropDowns";
import AccountMenu from "../headerAccountDropDown";
import SearchBar from "../searchBar";


const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  let personOptions = [
    { label: "Popular People", path: "/persons/popular" },
    { label: "Favorite Persons", path: "/persons/favourites" },
  ];

  let fantasyOptions = [
    { label: "Create Movie", path: "/fantasy/create" },
    { label: "View Movies", path: "/fantasy/list" },

  ];

  let tvOptions = [
    { label: "Popular TV Shows", path: "/tvshows/popular" },
    { label: "Favorite Shows", path: "/tvshows/favourites" },
  ];

  let movieOptions = [
    { label: "Discover", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Favorites", path: "/movies/favourites" },
    { label: "Watch List", path: "/movies/watchlist" },
  ];

  const loggedOutOptions = [
    { label: "Login", path: "/login" },
    { label: "Sign Up", path: "/signup" },
  ];

  const loggedInOptions = [{ label: "Logout", path: "/logout" }];

  let accountOptions = loggedIn() ? loggedInOptions : loggedOutOptions;

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar sx={styles.appbar} position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography>
          <SearchBar/>
          <HeaderDropDown menuOptions={fantasyOptions} placeholder={"Fantasy"} />
          <HeaderDropDown menuOptions={tvOptions} placeholder={"TV Shows"} />
          <HeaderDropDown menuOptions={personOptions} placeholder={"Actors"} />
          <HeaderDropDown menuOptions={movieOptions} placeholder={"Movies"} />
          <AccountMenu loggedIn={loggedIn()} menuOptions={accountOptions} />
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
