import type { Snowflake } from '../../payloads';
import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching tweets composed by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export interface GETUsersIdTweetsQuery extends MultipleTweetsLookupQuery {
  end_time?: string;
  max_results?: number;
  pagination_token?: string;
  since_id?: Snowflake;
  start_time?: string;
  until_id?: Snowflake;
  exclude?: Array<'retweets' | 'replies'>;
}

/**
 * The response of fetching tweets composed by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export interface GETUsersIdTweetsResponse extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    newest_id: Snowflake;
    oldest_id: Snowflake;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * Generates route for fetching tweets composed by a user:
 * - GET `/users/:id/tweets`
 * @param userId The user id whose tweets are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export function GETUsersIdTweetsRoute(userId: Snowflake) {
  return `/users/${userId}/tweets` as const;
}

/**
 * The query for fetching tweets mentioning a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export interface GETUsersIdMentionsQuery extends MultipleTweetsLookupQuery {
  end_time?: string;
  max_results?: number;
  pagination_token?: string;
  since_id?: Snowflake;
  start_time?: string;
  until_id?: Snowflake;
}

/**
 * The response of fetching tweets mentioning a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export interface GETUsersIdMentionsResponse extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    newest_id: Snowflake;
    oldest_id: Snowflake;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * Generates route for fetching tweets mentioning a user:
 * - GET `/users/:id/mentions`
 * @param userId The user id that the tweets mention
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export function GETUsersIdMentionsRoute(userId: Snowflake) {
  return `users/${userId}/mentions` as const;
}
