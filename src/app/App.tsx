import { createHashRouter, RouterProvider } from 'react-router-dom';

import { CharacterPage, CharactersPage, ErrorPage } from '@/pages';

// createHashRouter to work with github-pages
const router = createHashRouter([
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
