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
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export interface GETTweetsQuery extends MultipleTweetsLookupQuery {
  ids: Array<Snowflake>;
}

/**
 * The response of fetching multiple tweets by ids
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export type GETTweetsResponse = MultipleTweetsLookupResponse;

/**
 * Generates route for fetching multiple tweets by ids:
 * - GET `/tweets`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export function GETTweetsRoute() {
  return `/tweets` as const;
}

/**
 * The query for fetching a single tweet by id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export type GETTweetsIdQuery = SingleTweetLookupQuery;

/**
 * The response for the request of fetching a single tweet by ID
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export type GETTweetsIdResponse = SingleTweetLookupResponse;

/**
 * Generates route for fetching a tweet by id:
 * - GET `/tweets/:id`
 * @param tweetId The tweet id to fetch
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export function GETTweetsIdRoute(tweetId: Snowflake) {
  return `/tweets/${tweetId}` as const;
}
