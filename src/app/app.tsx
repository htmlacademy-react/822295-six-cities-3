import SearchPage from '../pages/search-page';
import { Offer } from '../types/offer';

type AppScreenProps = {
  offers: Array<Offer>;
}

function App({ offers }: AppScreenProps): JSX.Element {
  return (
    <SearchPage
      offers={offers}
    />
  );
}

export default App;
