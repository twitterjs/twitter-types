import type { APITweetField, APIUserField } from './misc';
import type { APITweetObject, APIUserObject, Snowflake } from '../payloads/index';

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
  ids: Array<Snowflake>;
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
// eslint-disable-next-line prettier/prettier
export interface GetSingleUserByUsernameQuery extends GetSingleUserByIdQuery { }

/**
 * The response for the request of fetching a single user by username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
// eslint-disable-next-line prettier/prettier
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

/**
 * The body for following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface PostFollowUserJSONBody {
  /**
   * The user ID of the user that you would like to follow
   */
  target_user_id: Snowflake;
}

/**
 * The response of following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface PostFollowUserResponse {
  data: PostFollowUserResponseData;
}

export interface PostFollowUserResponseData {
  /**
   * Indicates whether the authorized user is following the specified user as a result of the request.
   * This value is `false` if the target user does not have public Tweets, as they will have to approve
   * the follow request
   */
  following: boolean;

  /**
   * Indicates whether the target user will need to approve the follow request. Note that the authenticated
   * user will follow the target user only when they approve the incoming follow request
   */
  pending_follow: boolean;
}

export interface DeleteUnfollowUserResponse {
  data: DeleteUnfollowUserResponseData;
}

export interface DeleteUnfollowUserResponseData {
  /**
   * Indicates whether the authorized user unfollowed the specified user as a result of the request.
   * This value is `false` for a successful unfollow request
   */
  following: boolean;
}
