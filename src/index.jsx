import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import FavouritePersonPage from "./pages/favouritePersonsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import PersonContextProvider from "./contexts/personContext";
import TvShowContextProvider from "./contexts/tvShowContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MustWatchListPage from "./pages/watchListPage";
import PopularMoviePage from "./pages/popularMovies";
import PopularPersonsPage from "./pages/popularPersons";
import PersonDetailsPage from "./pages/personDetailsPage";
import Signup from "./pages/signUp";
import Login from "./pages/login";
import Logout from "./pages/logout";
import PopularTVShowsPage from "./pages/popularTVShows";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {  
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <PersonContextProvider>
              <TvShowContextProvider>
            <Routes>
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />}/>
              <Route path="/movies/watchlist" element={<MustWatchListPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoviePage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/persons/popular" element={<PopularPersonsPage />} />
              <Route path="/persons/:id" element={<PersonDetailsPage />} />
              <Route path="/persons/favourites" element={<FavouritePersonPage />}/>
              <Route path="/tvshows/popular" element={<PopularTVShowsPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />

            </Routes>
            </TvShowContextProvider>
            </PersonContextProvider>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
