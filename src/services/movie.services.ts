interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export type { Movie };
