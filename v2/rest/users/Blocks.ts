import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '.';
import type { Snowflake } from '../..';

/**
 * The query for fetching users blocked by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export interface GET_2_users_id_blocking_Query extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users blocked by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export interface GET_2_users_id_blocking_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The body for blocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface POST_2_users_id_blocking_JSONBody {
  target_user_id: Snowflake;
}

/**
 * The response of blocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface POST_2_users_id_blocking_Response {
  data: {
    blocking: boolean;
  };
}

/**
 * The response of unblocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export interface DELETE_2_users_source_user_id_blocking_target_user_id_Response {
  data: {
    blocking: boolean;
  };
}
