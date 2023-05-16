import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CharacterPage, CharactersPage, ErrorPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'characters/:characterId',
    element: <CharacterPage />,
  },
]);

export const App = () => <RouterProvider router={router} />;
