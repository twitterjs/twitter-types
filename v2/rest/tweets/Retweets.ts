import type { Snowflake } from '../..';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users/UsersLookup';

/**
 * The query for fetching users who retweeted a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export type GET_2_tweets_id_retweeted_by_Query = MultipleUsersLookupQuery;

/**
 * The response of fetching users who retweeted a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export interface GET_2_tweets_id_retweeted_by_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
  };
}

/**
 * The body for retweeting a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface POST_2_users_id_retweets_JSONBody {
  id: Snowflake;
}

/**
 * The response of retweeting a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface POST_2_users_id_retweets_Response {
  retweeted: boolean;
}

/**
 * The response of removing a retweet of a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id
 */
export interface DELETE_2_users_id_retweets_source_tweet_id_Response {
  retweeted: boolean;
}
