import React, { useState } from "react";
import Pagination from "../../Utils/pagination";
import Header from "../../Movies/headerMovieList";
import Grid from "@mui/material/Grid";
import PersonList from "../personList";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

function PersonListPageTemplate({ persons, title, action }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = persons.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(persons.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <PersonList action={action} persons={currentRecords} />
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
export default PersonListPageTemplate;
