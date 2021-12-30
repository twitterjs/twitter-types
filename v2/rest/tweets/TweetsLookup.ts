import type { APITweet, APIUser, APIPlace, APIMedia, APIPoll, Snowflake } from '../../payloads';
import type {
  APIMediaFieldsParameter,
  APIPlaceFieldsParameter,
  APIPollFieldsParameter,
  APITweetFieldsParameter,
  APIUserFieldsParameter,
} from '../misc';

export type APITweetExpansionsParameter =
  | 'attachments.poll_ids'
  | 'attachments.media_keys'
  | 'author_id'
  | 'entities.mentions.username'
  | 'geo.place_id'
  | 'in_reply_to_user_id'
  | 'referenced_tweets.id'
  | 'referenced_tweets.id.author_id';

export interface APITweetExpansions {
  tweets?: Array<APITweet>;
  users?: Array<APIUser>;
  places?: Array<APIPlace>;
  media?: Array<APIMedia>;
  polls?: Array<APIPoll>;
}

export interface SingleTweetLookupQuery {
  expansions?: Array<APITweetExpansionsParameter>;
  'media.fields'?: Array<APIMediaFieldsParameter>;
  'place.fields'?: Array<APIPlaceFieldsParameter>;
  'poll.fields'?: Array<APIPollFieldsParameter>;
  'tweet.fields'?: Array<APITweetFieldsParameter>;
  'user.fields'?: Array<APIUserFieldsParameter>;
}

export interface SingleTweetLookupResponse {
  data: APITweet;
  includes?: APITweetExpansions;
}

export type MultipleTweetsLookupQuery = SingleTweetLookupQuery;

export interface MultipleTweetsLookupResponse {
  data: Array<APITweet>;
  includes?: APITweetExpansions;
}

/**
 * The query for fetching multiple tweets by ids
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export interface GET_2_tweets_Query extends MultipleTweetsLookupQuery {
  ids: Array<Snowflake>;
}

/**
 * The response of fetching multiple tweets by ids
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export type GET_2_tweets_Response = MultipleTweetsLookupResponse;

/**
 * The query for fetching a single tweet by id
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export type GET_2_tweets_id_Query = SingleTweetLookupQuery;

/**
 * The response for the request of fetching a single tweet by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export type GET_2_tweets_id_Response = SingleTweetLookupResponse;
