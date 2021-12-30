import type { APIList, APIMedia, APIPlace, APIPoll, APISpace, APITweet, APIUser } from '../payloads';

export type APIListFieldsParameter = keyof APIList;

export type APIMediaFieldsParameter = keyof APIMedia;

export type APIPlaceFieldsParameter = keyof APIPlace;

export type APIPollFieldsParameter = keyof APIPoll;

export type APISpaceFieldsParameter = keyof APISpace;

export type APITweetFieldsParameter = keyof APITweet;

export type APIUserFieldsParameter = keyof APIUser;

// eslint-disable-next-line no-unused-vars
export type Without<FirstType, SecondType> = { [KeyType in Exclude<keyof FirstType, keyof SecondType>]?: never };

export type MergeExclusive<FirstType, SecondType> = FirstType | SecondType extends object
  ? (Without<FirstType, SecondType> & SecondType) | (Without<SecondType, FirstType> & FirstType)
  : FirstType | SecondType;
