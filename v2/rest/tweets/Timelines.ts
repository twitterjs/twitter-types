import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from '.';
import type { Snowflake } from '../..';

/**
 * The query for fetching tweets composed by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export interface GET_2_users_id_tweets_Query extends MultipleTweetsLookupQuery {
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
 * https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export interface GET_2_users_id_tweets_Response extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    newest_id: Snowflake;
    oldest_id: Snowflake;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The query for fetching tweets mentioning a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export interface GET_2_users_id_mentions_Query extends MultipleTweetsLookupQuery {
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
 * https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export interface GET_2_users_id_mentions_Response extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    newest_id: Snowflake;
    oldest_id: Snowflake;
    previous_token?: string;
    next_token?: string;
  };
}
