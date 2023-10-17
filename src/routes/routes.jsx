import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Scene from '../components/3D/Scene';
import NoPageFound from '../components/NoPageFound';
import Home from '../components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div><Scene /><Home /></div>
      },
      {
        path: '/home',
        element: <div><Scene /><Home /></div>
      },
      {
        path: '*',
        element: <NoPageFound />
      }
    ]
  },
]);
