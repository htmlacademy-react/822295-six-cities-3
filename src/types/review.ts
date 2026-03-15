import { User } from './offer';

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type ReviewFormData = {
  rating: number;
  comment: string;
}
