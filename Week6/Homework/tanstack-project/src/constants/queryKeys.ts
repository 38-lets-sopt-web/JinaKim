export const QUERY_KEYS = {
  movies: {
    all: ["movies"] as const,
    list: () => [...QUERY_KEYS.movies.all, "list"] as const,
    detail: (movieId: number) =>
      [...QUERY_KEYS.movies.all, "detail", movieId] as const,
  },

  ratings: {
    all: ["ratings"] as const,
    ratedMovies: (guestSessionId: string) =>
      [...QUERY_KEYS.ratings.all, "ratedMovies", guestSessionId] as const,
    accountStates: (guestSessionId: string, movieId: number) =>
      [
        ...QUERY_KEYS.ratings.all,
        "accountStates",
        guestSessionId,
        movieId,
      ] as const,
  },

  guest: {
    all: ["guest"] as const,
    session: () => [...QUERY_KEYS.guest.all, "session"] as const,
  },
};
