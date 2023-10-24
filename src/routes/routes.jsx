import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NoPageFound from '../components/NoPageFound';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <div>
                        <Home />
                    </div>
                ),
            },
            {
                path: '/home',
                element: (
                    <div>
                        <Home />
                    </div>
                ),
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '*',
                element: <NoPageFound />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);
