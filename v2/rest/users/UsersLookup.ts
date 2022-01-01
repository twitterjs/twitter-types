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
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export interface GET_2_users_Query extends MultipleUsersLookupQuery {
  ids: Array<Snowflake>;
}

/**
 * The response of fetching users by their ids
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export type GET_2_users_Response = MultipleUsersLookupResponse;

/**
 * The query for fetching a user by its id
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export type GET_2_users_id_Query = SingleUserLookupQuery;

/**
 * The response of fetching a user by its id
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export type GET_2_users_id_Response = SingleUserLookupResponse;

/**
 * The query for fetching users by their usernames
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export interface GET_2_users_by_Query extends MultipleUsersLookupQuery {
  usernames: Array<string>;
}

/**
 * The response of fetching users by their usernames
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export type GET_2_users_by_Response = MultipleUsersLookupResponse;

/**
 * The query for fetching a user by its username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export type GET_2_users_by_username_username_Query = SingleUserLookupQuery;

/**
 * The response of fetching a user by its username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export type GET_2_users_by_username_username_Response = SingleUserLookupResponse;

/**
 * The query for fetching an authorized user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
 */
export type GET_2_users_me_Query = SingleUserLookupQuery;

/**
 * The response of fetching an authorized user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
 */
export type GET_2_users_me_Response = SingleUserLookupResponse;
