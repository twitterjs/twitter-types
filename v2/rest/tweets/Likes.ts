import type { Snowflake } from '../../payloads';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';
import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching users who liked a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users
 */
export type GET_2_tweets_id_liking_users_Query = MultipleUsersLookupQuery;

/**
 * The response of fetching users who liked a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users
 */
export interface GET_2_tweets_id_liking_users_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
  };
}

/**
 * The query for fetching tweets liked by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets
 */
export interface GET_2_users_id_liked_tweets_Query extends MultipleTweetsLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching tweets liked by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets
 */

export interface GET_2_users_id_liked_tweets_Response extends MultipleTweetsLookupResponse {
  meta: {
    result_count: number;
    next_token?: string;
    previous_token?: string;
  };
}

/**
 * The body for liking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface POST_2_users_id_likes_JSONBody {
  tweet_id: Snowflake;
}

/**
 * The response of liking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface POST_2_users_id_likes_Response {
  data: {
    liked: boolean;
  };
}

/**
 * The response of unliking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id
 */
export interface DELETE_2_users_id_likes_tweet_id_Response {
  data: {
    liked: boolean;
  };
}
