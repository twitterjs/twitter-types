import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from '..';

/**
 * The query for fetching tweets from a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets
 */
export interface GET_2_lists_id_tweets_Query extends MultipleTweetsLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching tweets from a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets
 */
export interface GET_2_lists_id_tweets_Response extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}
