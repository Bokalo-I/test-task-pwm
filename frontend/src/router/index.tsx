import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@/layouts/root';
import Home from '@/pages/home';
import WatchList from '@/pages/watch-list';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/watch-list',
        element: <WatchList />,
      },
      {
        path: '*',
        element: <div>Not found page</div>,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
