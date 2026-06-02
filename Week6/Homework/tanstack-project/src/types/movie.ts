export interface MovieListItem {
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  title: string;
}

export interface MovieListResponse {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  release_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  vote_average: number;
  vote_count: number;
  runtime: number | null;
  status: string;
  budget: number;
  revenue: number;
}
