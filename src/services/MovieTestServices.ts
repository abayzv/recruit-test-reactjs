import api from "../utils/api";
import { Movie } from "./movie.services";

const getMovieDetails = (): Promise<Movie> =>
  api.get("/movie/667538").then((response) => response.data);

export { getMovieDetails };
