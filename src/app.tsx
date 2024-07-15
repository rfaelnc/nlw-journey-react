import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateTypePage } from './pages/create-trip';
import { TripDetailsPage } from './pages/trip-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTypePage />,
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
