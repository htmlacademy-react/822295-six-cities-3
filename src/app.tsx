import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/router';
import { useAppSelector } from './hooks';
import Loading from './components/loading/loading';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
}

export default App;
