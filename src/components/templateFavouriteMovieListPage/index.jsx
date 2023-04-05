import React, { useEffect, useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieFavouriteList";
import Pagination from "../pagination";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

function MovieListFavouritePageTemplate({ movies, title, action }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = movies.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(movies.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList action={action} movies={currentRecords} />
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

export default MovieListFavouritePageTemplate;
