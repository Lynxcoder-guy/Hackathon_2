import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Login from './Auths/login.jsx';
import Register from './Auths/register.jsx';
import Splash from './Auths/splash.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
