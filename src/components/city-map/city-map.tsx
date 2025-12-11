import { OfferListItem } from '@/types/offer';
import clsx from 'clsx';

type CityMapProps = {
  selectedOffer?: OfferListItem | null;
  blockName: 'cities' | 'offer';
}

function CityMap({blockName, selectedOffer} : CityMapProps): JSX.Element {
  const placeClass: string = `${blockName}__map`;

  return (
    <div className="cities__right-section">
      <section className={clsx(placeClass, 'map')}></section>
    </div>
  );
}

export default CityMap;
