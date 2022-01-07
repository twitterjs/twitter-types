import type { Snowflake } from '../../payloads';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from './index';

/**
 * The query for fetching users blocked by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export interface GETUsersIdBlockingQuery extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users blocked by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export interface GETUsersIdBlockingResponse extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * Generates route for fetching users blocked by a user:
 * - GET `/users/:id/blocking`
 * @param userId The user id to block
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 *
 */
export function GETUsersIdBlockingRoute(userId: Snowflake) {
  return `/users/${userId}/blocking` as const;
}

/**
 * The body for blocking a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface POSTUsersIdBlockingJSONBody {
  target_user_id: Snowflake;
}

/**
 * The response of blocking a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface POSTUsersIdBlockingResponse {
  data: {
    blocking: boolean;
  };
}

/**
 * Generates route for blocking a user:
 * - POST `/users/:id/blocking`
 * @param userId The user id to block
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 *
 */
export function POSTUsersIdBlockingRoute(userId: Snowflake) {
  return `/users/${userId}/blocking` as const;
}

/**
 * The response of unblocking a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export interface DELETEUsersSourceUserIdBlockingTargetUserIdResponse {
  data: {
    blocking: boolean;
  };
}

/**
 * Generates route for unblocking a user:
 * - DELETE `/users/:source_user_id/blocking/:target_user_id`
 * @param sourceUserId The user id to send the request on behalf of
 * @param targetUserId The user id to unblock
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export function DELETEUsersSourceUserIdBlockingTargetUserIdRoute(sourceUserId: Snowflake, targetUserId: Snowflake) {
  return `/users/${sourceUserId}/blocking/${targetUserId}` as const;
}
