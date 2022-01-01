import type { Snowflake } from '../../payloads';
import type {
  MultipleTweetsLookupQuery,
  MultipleTweetsLookupResponse,
  SingleTweetLookupQuery,
  SingleTweetLookupResponse,
} from './index';

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
