import { capitalizeFirst } from '@/utils/utils';
import PlaceCardList from '../place-card-list/place-card-list';
import Sorting from '../sorting/sorting';
import { useState } from 'react';
import { OfferListItem } from '@/types/offer';
import { LocationName } from '@/const';

type PlacesProp = {
  offers: Array<OfferListItem>;
  city: LocationName;
}

function Places({offers, city}: PlacesProp): JSX.Element {
  const [, setSelectedOffer] = useState<OfferListItem | null>(null);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in {capitalizeFirst(city)}</b>
      <Sorting />
      <PlaceCardList offers={offers} onChangeCardState={(offer: OfferListItem | null) => setSelectedOffer(offer)} />
    </section>
  );
}

export default Places;
