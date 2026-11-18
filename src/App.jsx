import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Login from './Auths/login.jsx';
import Register from './Auths/register.jsx';
import Splash from './Auths/splash.jsx';
import SimpleLogin from './Auths/simpleLogin.jsx';

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
    path: '/simple-login',
    element: <SimpleLogin />
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
