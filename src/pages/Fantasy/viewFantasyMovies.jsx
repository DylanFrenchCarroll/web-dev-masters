import React, { Component } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import FantasyMovieList from "../../components/Fantasy/fantasyMovieList";
import { retrieveFantasyDB } from "../../firebase";
import FantasyMovieListPageTemplate from "../../components/Fantasy/templateFantasyMovieListPage";

class FantasyFormListPage extends React.Component {
  // checkLogin();
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("authUser"));
    retrieveFantasyDB(user).then((res) => {
      this.setState({ fantasyMovies: res, DataisLoaded: true });
    });
  }

  render() {
    const { DataisLoaded, fantasyMovies } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <>
        <FantasyMovieListPageTemplate
          title="Fantasy Movies"
          movies={fantasyMovies}
        />
      </>
    );
  }
}

export default FantasyFormListPage;
