import type { Snowflake } from '../../payloads';
import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './TweetsLookup';

/**
 * The query for fetching recent tweets by search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
 */
export interface GET_2_tweets_search_recent_Query extends MultipleTweetsLookupQuery {
  query: string;
  next_token?: string;
  end_time?: string;
  max_results?: number;
  since_id?: Snowflake;
  start_time?: string;
  until_id?: Snowflake;
}

/**
 * The response of fetching recent tweets by search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
 */
export interface GET_2_tweets_search_recent_Response extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    newest_id: Snowflake;
    oldest_id: Snowflake;
    next_token?: string;
  };
}

/**
 * The query for fetching full-archive tweets by search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export type GET_2_tweets_search_all_Query = GET_2_tweets_search_recent_Query;

/**
 * The response of fetching full-archive tweets by search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export type GET_2_tweets_search_all_Response = GET_2_tweets_search_recent_Response;
