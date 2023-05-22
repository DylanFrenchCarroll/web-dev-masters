export const getMovies = async () => {
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };
  const user = JSON.parse(localStorage.getItem("authUser"));
  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(`${import.meta.env.VITE_API_URL}/api/movies?page=${i}`, { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} }).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    resultsList = resultsList.concat(z.results);
  }
  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getUpcomingMovies = async () => {
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  const user = JSON.parse(localStorage.getItem("authUser"));
  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(`${import.meta.env.VITE_API_URL}/api/movies/upcoming?page=${i}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getPopularMovies = async () => {
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  const user = JSON.parse(localStorage.getItem("authUser"));
  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(`${import.meta.env.VITE_API_URL}/api/movies/popular?page=${i}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieVideo = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}/videos` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getGenres = async () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY +"&language=en-US"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}/images` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieReviews = (id) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}/reviews` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const getPopularPersons = async () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(`${import.meta.env.VITE_API_URL}/api/persons/popular?page=${i}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getPersonImages = ({ queryKey }) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(`${import.meta.env.VITE_API_URL}/api/persons/${id}/images` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getPerson = (args) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(`${import.meta.env.VITE_API_URL}/api/persons/${id}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getPopularTVShows = async () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(`${import.meta.env.VITE_API_URL}/api/shows/popular?page=${i}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getShow = (args) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(`${import.meta.env.VITE_API_URL}/api/shows/${id}` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getShowImages = ({ queryKey }) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(`${import.meta.env.VITE_API_URL}/api/shows/${id}/images` ,  { headers: {Authorization: `Bearer ${user.stsTokenManager.accessToken}`} })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const searchMovie = (query) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
