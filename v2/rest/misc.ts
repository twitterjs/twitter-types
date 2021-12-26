import type { APIList, APIMedia, APIPlace, APIPoll, APISpace, APITweet, APIUser } from '../payloads';

export type MediaFieldsParameter = keyof APIMedia;

export type PlaceFieldsParameter = keyof APIPlace;

export type PollFieldsParameter = keyof APIPoll;

export type SpaceFieldsParameter = keyof APISpace;

export type TweetFieldsParameter = keyof APITweet;

export type UserFieldsParameter = keyof APIUser;

export type ListFieldsParameter = keyof APIList;
