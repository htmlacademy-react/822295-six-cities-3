export enum PLACE_TYPE {
  APARTMENT = 'Apartment',
  ROOM = 'Room',
}

export type PlaceProp = {
  id: number;
  description: string;
  cost: number;
  rating: number;
  type: PLACE_TYPE;
  img: string;
}

export type PlaceCardInfo = {
  [key: string]: PlaceProp[];
}

