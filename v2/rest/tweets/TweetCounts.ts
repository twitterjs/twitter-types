/**
 * The query for fetching count of recent tweets that match a search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent
 */
export interface GET_2_tweets_counts_recent_Query {
  query: string;
  end_time?: string;
  granularity?: 'minute' | 'hour' | 'day';
  since_id?: string;
  start_time?: string;
  until_id?: string;
  next_token?: string; // TODO: confirm this field
}

/**
 * The response of fetching count of recent tweets that match a search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent
 */
export interface GET_2_tweets_counts_recent_Response {
  data: Array<{
    end: string;
    start: string;
    tweet_count: number;
  }>;
  meta: {
    next_token?: string; // TODO: confirm this field
    total_tweet_count: number;
  };
}

/**
 * The query for fetching count of full-archive tweets that match a search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-all
 */
export type GET_2_tweets_counts_all_Query = GET_2_tweets_counts_recent_Query;

/**
 * The response of fetching count of full-archive tweets that match a search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-all
 */
export type GET_2_tweets_counts_all_Response = GET_2_tweets_counts_recent_Response;
