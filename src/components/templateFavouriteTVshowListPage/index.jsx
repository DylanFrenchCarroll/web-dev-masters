import React, { useEffect, useState } from "react";
import Pagination from "../Utils/pagination";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TvShowList from "../tvshowFavouriteList";
const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

function FavouriteTVShowListPageTemplate({ shows, title, action }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = shows.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(shows.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <TvShowList action={action} tvshows={currentRecords} />
        </Grid>
      </Grid>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
export default FavouriteTVShowListPageTemplate;
