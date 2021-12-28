import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '.';
import type { Snowflake } from '../..';

/**
 * The query for fetching users followed by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following
 */
export interface GET_2_users_id_following_Query extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users followed by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following
 */
export interface GET_2_users_id_following_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The query for fetching users following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export interface GET_2_users_id_followers_Query extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export interface GET_2_users_id_followers_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The body for following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface POST_2_users_id_following_JSONBody {
  target_user_id: Snowflake;
}

/**
 * The response of following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface POST_2_users_id_following_Response {
  data: {
    following: boolean;
    pending_follow: boolean;
  };
}

/**
 * The response of unfollowing a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following
 */
export interface DELETE_2_users_source_user_id_following_target_user_id_Response {
  data: {
    following: boolean;
  };
}
