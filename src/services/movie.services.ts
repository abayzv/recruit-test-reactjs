interface Genres {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  status: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genres: Genres[];
  production_companies: ProductionCompany[];
}

export type { Movie };
