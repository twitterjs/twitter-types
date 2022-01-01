import type { Snowflake } from '../../payloads';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from './index';

/**
 * The query for fetching users blocked by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export interface GET2UsersIdBlockingQuery extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users blocked by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export interface GET2UsersIdBlockingResponse extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * Generates route for fetching users blocked by a user:
 * - GET `/2/users/:id/blocking`
 * @param userId The user id to block
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 *
 */
export function GET2UsersIdBlockingRoute(userId: Snowflake) {
  return `/2/users/${userId}/blocking` as const;
}

/**
 * The body for blocking a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface POST2UsersIdBlockingJSONBody {
  target_user_id: Snowflake;
}

/**
 * The response of blocking a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface POST2UsersIdBlockingResponse {
  data: {
    blocking: boolean;
  };
}

/**
 * Generates route for blocking a user:
 * - POST `/2/users/:id/blocking`
 * @param userId The user id to block
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 *
 */
export function POST2UsersIdBlockingRoute(userId: Snowflake) {
  return `/2/users/${userId}/blocking` as const;
}

/**
 * The response of unblocking a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export interface DELETE2UsersSourceUserIdBlockingTargetUserIdResponse {
  data: {
    blocking: boolean;
  };
}

/**
 * Generates route for unblocking a user:
 * - DELETE `/2/users/:source_user_id/blocking/:target_user_id`
 * @param sourceUserId The user id to send the request on behalf of
 * @param targetUserId The user id to unblock
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export function DELETE2UsersSourceUserIdBlockingTargetUserIdRoute(sourceUserId: Snowflake, targetUserId: Snowflake) {
  return `/2/users/${sourceUserId}/blocking/${targetUserId}` as const;
}
