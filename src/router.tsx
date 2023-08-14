import { createBrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import Register from './containers/Auth/register';
import Login from './containers/Auth/login';

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
    }
]);

export default router;