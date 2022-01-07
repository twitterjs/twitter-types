import type { Snowflake } from '../../payloads';
import type {
  MultipleUsersLookupQuery,
  MultipleUsersLookupResponse,
  SingleUserLookupQuery,
  SingleUserLookupResponse,
} from './index';

/**
 * The query for fetching users by their ids
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export interface GETUsersQuery extends MultipleUsersLookupQuery {
  ids: Array<Snowflake>;
}

/**
 * The response of fetching users by their ids
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export type GETUsersResponse = MultipleUsersLookupResponse;

/**
 * Generates route for fetching users by their ids:
 * - GET `/users`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export function GETUsersRoute() {
  return `/users` as const;
}

/**
 * The query for fetching a user by its id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export type GETUsersIdQuery = SingleUserLookupQuery;

/**
 * The response of fetching a user by its id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export type GETUsersIdResponse = SingleUserLookupResponse;

/**
 * Generates route for fetching a user by its id:
 * - GET `/users/:id`
 * @param userId The user id to fetch
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export function GETUsersIdRoute(userId: Snowflake) {
  return `/users/${userId}` as const;
}

/**
 * The query for fetching users by their usernames
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export interface GETUsersByQuery extends MultipleUsersLookupQuery {
  usernames: Array<string>;
}

/**
 * The response of fetching users by their usernames
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export type GETUsersByResponse = MultipleUsersLookupResponse;

/**
 * Generates route for fetching users by their usernames:
 * - GET `/users/by`
 *
 * @see  https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export function GETUsersByRoute() {
  return `/users/by` as const;
}

/**
 * The query for fetching a user by its username
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export type GETUsersByUsernameUsernameQuery = SingleUserLookupQuery;

/**
 * The response of fetching a user by its username
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export type GETUsersByUsernameUsernameResponse = SingleUserLookupResponse;

/**
 * Generates route for fetching a user by its username:
 * - GET `/users/by/username/:username`
 * @param username The username to fetch
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export function GETUsersByUsernameUsernameRoute(username: string) {
  return `/users/by/username/${username}` as const;
}

/**
 * The query for fetching an authorized user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
 */
export type GETUsersMeQuery = SingleUserLookupQuery;

/**
 * The response of fetching an authorized user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
 */
export type GETUsersMeResponse = SingleUserLookupResponse;

/**
 * Generates route for fetching an authorized user:
 * - GET `/users/me`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
 */
export function GETUsersMeRoute() {
  return `/users/me` as const;
}
