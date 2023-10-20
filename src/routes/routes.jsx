import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Scene from '../components/3D/Scene';
import NoPageFound from '../components/NoPageFound';
import Home from '../components/Home';
import About from '../components/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div><Home /></div>
      },
      {
        path: '/home',
        element: <div><Home /></div>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <NoPageFound />
      }
    ]
  },
]);
