import { OfferListItem } from '@/types/offer';

type CityMapProps = {
  selectedOffer: OfferListItem | null;
}

function CityMap({selectedOffer} : CityMapProps): JSX.Element {
  return (
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  );
}

export default CityMap;
