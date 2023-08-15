import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWMwZDM4NjYwNTM2OTQxMjZlMDU0Y2I4MTE2ODlhMSIsInN1YiI6IjYwMzRiNDUxYTE0ZTEwMDA0MGNmNzMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A4cEGxl1Xc0KWe4Ejh228eA_KCseyLQVucqMXnEzD4o";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// handle axios error
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
