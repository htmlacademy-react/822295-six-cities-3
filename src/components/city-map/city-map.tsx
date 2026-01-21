import { FirstElementIndex, URL_MARKER_DEFAULT } from '@/const';
import useMap from '@/hooks/useMap';
import { OfferListItem } from '@/types/offer';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type CityMapProps = {
  blockName: 'cities' | 'offer';
  cityOffersList: Array<OfferListItem>;
}

const size = {
  cities: { width: '512px', height: '100%' },
  offer: { width: '100%', height: '579px' },
};

function CityMap({ blockName, cityOffersList }: CityMapProps): JSX.Element {
  const placeClass: string = `${blockName}__map`;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityOffersList[FirstElementIndex].city);


  const points = cityOffersList.map((offer) => offer.location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon]);


  return (
    <div className="cities__right-section">
      <section
        className={clsx(placeClass, 'map')}
        ref={mapRef}
        style={{ height: size[blockName].height, width: size[blockName].width }}
      >
      </section>
    </div>
  );
}

export default CityMap;
