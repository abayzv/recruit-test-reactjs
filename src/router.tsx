import { createBrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import Register from './containers/Auth/register';
import Login from './containers/Auth/login';
import Details from './containers/Movies/id';
import TvDetails from './containers/Tv/id';
import MoviePage from './containers/Movies';
import TvPage from './containers/Tv';
import Search from './containers/Search';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/movie/:id',
        element: <Details />
    },
    {
        path: '/movies',
        element: <MoviePage />
    },
    {
        path: '/tv/:id',
        element: <TvDetails />
    },
    {
        path: '/tv',
        element: <TvPage />
    },
    {
        path: '/movie/search',
        element: <Search type="movie" />
    },
    {
        path: '/tv/search',
        element: <Search type="tv" />
    }
]);

export default router;