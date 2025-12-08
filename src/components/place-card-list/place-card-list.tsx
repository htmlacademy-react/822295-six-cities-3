import { OfferListItem } from '@/types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProp = {
  offers: Array<OfferListItem>;
}

function PlaceCardList({ offers }: PlaceCardListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
    </div>
  );
}

export default PlaceCardList;
