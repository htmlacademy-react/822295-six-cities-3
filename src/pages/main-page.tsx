import CityMap from '@/components/city-map/city-map';
import Header from '@/components/header/header';
import Locations from '@/components/locations/locations';
import PlacesEmpty from '@/components/places-empty/places-empty';
import Places from '@/components/places/places';
import { AppRoute, LocationName, SortingOption } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchOffersByCity, setCurrentCity } from '@/store/actions';
import { isLocationName } from '@/utils/utils';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const city = useParams().city as LocationName;
  const { offers, sortingOption } = useAppSelector((state) => state);

  const isOffersEmpty = offers.length === 0;

  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (isLocationName(city)) {
      dispatch(setCurrentCity(city));
      dispatch(fetchOffersByCity());
    } else {
      navigate(AppRoute.NotFound);
    }
  }, [city, dispatch, navigate]);

  const sortedOffers = useMemo(() => {
    const sorted = [...offers];

    switch (sortingOption) {
      case SortingOption.PriceLowToHigh:
        return sorted.sort((a, b) => a.price - b.price);
      case SortingOption.PriceHighToLow:
        return sorted.sort((a, b) => b.price - a.price);
      case SortingOption.TopRatedFirst:
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }, [offers, sortingOption]);

  const handleOfferHover = (offerId: string | undefined) => {
    setSelectedOfferId(offerId);
  };

  return (
    <div className={clsx('page', 'page--gray', 'page--main')}>
      <Header />
      <main className={clsx('page__main', 'page__main--index', isOffersEmpty && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Locations currentCity={city} />
        <div className="cities">
          <div className="cities__places-container container">
            {isOffersEmpty ? <PlacesEmpty /> : <Places offers={sortedOffers} currentCity={city} onOfferHover={handleOfferHover} />}

            <div className="cities__right-section">
              {!isOffersEmpty && <CityMap blockName={'cities'} cityOffersList={sortedOffers} selectedOfferId={selectedOfferId} />}
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
