import { AxiosResponse } from 'axios';

enum ReviewText {
  'empty',
  'notempty',
}

export interface ReviewGet {
  location_id?: string;
  location_profile_id?: string;
  limit?: number;
  added_since?: Date;
  added_before?: Date;
  review_text?: ReviewText;
  metadata?: [];
  [key: string]: any;
}

export interface ReviewSentiment {
  location_id?: string;
  date_from?: Date;
  date_to?: Date;
}

export type Response = [any, AxiosResponse | undefined];
