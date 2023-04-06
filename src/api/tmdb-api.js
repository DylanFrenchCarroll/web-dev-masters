export const getMovies = async () => {
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&include_adult=false&include_video=false&page=${i}`
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

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&page=${i}`
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

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&page=${i}`
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
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
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

export const getMovieVideo = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
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


export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      import.meta.env.VITE_TMDB_KEY +
      "&language=en-US"
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
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
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

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const getPopularPersons = async () => {
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(
      `https://api.themoviedb.org/3//person/popular?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&include_adult=false&include_video=false&page=${i}`
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
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getPersonImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
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

export const getPerson = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
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

export const getPopularTVShows = async () => {
  let resultsList = [];
  // A bit hacky to avoid changing a lot of logic made from lab code
  let fakeResponse = {
    results: [],
  };

  // Loop through some requests pages based on api limit
  for (let i = 1; i < 5; i++) {
    let z = await fetch(
      `https://api.themoviedb.org/3//tv/top_rated?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&include_adult=false&page=${i}`
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
    resultsList = resultsList.concat(z.results);
  }

  fakeResponse.results = resultsList;
  return fakeResponse;
};

export const getShow = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
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
