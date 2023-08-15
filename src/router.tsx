import { createBrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import Register from './containers/Auth/register';
import Login from './containers/Auth/login';
import Details from './containers/Movies/id';
import MoviePage from './containers/Movies';

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
        path: '/movies/:id',
        element: <Details />
    },
    {
        path: '/movies',
        element: <MoviePage />
    }
]);

export default router;