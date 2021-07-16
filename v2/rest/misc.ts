import type { APIMedia, APIPlace, APIPoll, APITweet, APIUser } from '../payloads/index';

export type MediaFieldsParameter = keyof APIMedia;

export type PlaceFieldsParameter = keyof APIPlace;

export type PollFieldsParameter = keyof APIPoll;

export type TweetFieldsParameter = keyof APITweet;

export type UserFieldsParameter = keyof APIUser;
