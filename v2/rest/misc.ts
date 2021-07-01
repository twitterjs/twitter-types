import type { APIMediaObject, APIPlaceObject, APIPollObject, APITweetObject, APIUserObject } from '../payloads/index';

export type APIMediaField = keyof APIMediaObject;

export type APIPlaceField = keyof APIPlaceObject;

export type APIPollField = keyof APIPollObject;

export type APITweetField = keyof APITweetObject;

export type APIUserField = keyof APIUserObject;
