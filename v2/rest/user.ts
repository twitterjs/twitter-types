import type { APITweetObject, APIUserObject } from '../payloads';
import type { APITweetField, APIUserField } from './misc';

export type APIUserExpansion = 'pinned_tweet_id';

export interface APIUserIncludes {
  tweets?: Array<APITweetObject>;
}

/**
 * The query for fetching a single user by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export interface GetSingleUserByIdQuery {
  expansions?: Array<APIUserExpansion>;

  'tweet.fields'?: Array<APITweetField>;

  'user.fields'?: Array<APIUserField>;
}

/**
 * The response for the request of fetching a single user by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export interface GetSingleUserByIdResponse {
  data: APIUserObject;
  includes?: APIUserIncludes;
}

/**
 * The query for fetching multiple users by IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export interface GetMultipleUsersByIdsQuery extends GetSingleUserByIdQuery {
  /**
   * Comma separated list of user IDs. Up to `100` are allowed in a single request.
   * Make sure to not include a space between commas and fields
   */
  ids: Array<string>;
}

/**
 * The response for the request of fetching multiple users by IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export interface GetMultipleUsersByIdsResponse {
  data: Array<APIUserObject>;
  includes?: APIUserIncludes;
}

/**
 * The query for fetching a single user by username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export interface GetSingleUserByUsernameQuery extends GetSingleUserByIdQuery { }

/**
 * The response for the request of fetching a single user by username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export interface GetSingleUserByUsernameResponse extends GetSingleUserByIdResponse { }

/**
 * The query for fetching multiple users by usernames
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export interface GetMultipleUsersByUsernamesQuery extends GetSingleUserByUsernameQuery {
  /**
   * A comma separated list of Twitter usernames (handles). Up to 100 are allowed in a single request.
   * Make sure to not include a space between commas and fields
   */
  usernames: Array<string>;
}

/**
 * The response for the request of fetching multiple users by usernames
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export interface GetMultipleUsersByUsernamesResponse {
  data: Array<APIUserObject>;
  includes?: APIUserIncludes;
}
