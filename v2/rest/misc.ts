import type { APIList, APIMedia, APIPlace, APIPoll, APISpace, APITweet, APIUser } from '../payloads';

export type ListFieldsParameter = keyof APIList;

export type MediaFieldsParameter = keyof APIMedia;

export type PlaceFieldsParameter = keyof APIPlace;

export type PollFieldsParameter = keyof APIPoll;

export type SpaceFieldsParameter = keyof APISpace;

export type TweetFieldsParameter = keyof APITweet;

export type UserFieldsParameter = keyof APIUser;

// eslint-disable-next-line no-unused-vars
export type Without<FirstType, SecondType> = { [KeyType in Exclude<keyof FirstType, keyof SecondType>]?: never };

export type MergeExclusive<FirstType, SecondType> = FirstType | SecondType extends object
  ? (Without<FirstType, SecondType> & SecondType) | (Without<SecondType, FirstType> & FirstType)
  : FirstType | SecondType;
