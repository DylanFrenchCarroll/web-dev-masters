import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/Movies/homePage";
import MoviePage from "./pages/Movies/movieDetailsPage";
import FavouriteMoviesPage from "./pages/Movies/favouriteMoviesPage"; // NEW
import FavouritePersonPage from "./pages/Persons/favouritePersonsPage";
import MovieReviewPage from "./pages/Movies/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/Movies/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import PersonContextProvider from "./contexts/personContext";
import TvShowContextProvider from "./contexts/tvShowContext";
import AddMovieReviewPage from "./pages/Movies/addMovieReviewPage";
import MustWatchListPage from "./pages/Movies/watchListPage";
import PopularMoviePage from "./pages/Movies/popularMovies";
import PopularPersonsPage from "./pages/Persons/popularPersons";
import PersonDetailsPage from "./pages/Persons/personDetailsPage";
import Signup from "./pages/Auth/signUp";
import Login from "./pages/Auth/login";
import Logout from "./pages/Auth/logout";
import PopularTVShowsPage from "./pages/TVShows/popularTVShows";
import FavouriteTvShowPage from "./pages/TVShows/favouriteTVShowsPage";
import TvShowDetailsPage from "./pages/TVShows/tvShowDetailsPage";

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
                <Route path="/tvshows/favourites" element={<FavouriteTvShowPage />} />
                <Route path="/tvshows/:id" element={<TvShowDetailsPage />} />
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
