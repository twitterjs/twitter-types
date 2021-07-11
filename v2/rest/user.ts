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
export interface PostUserFollowJSONBody {
  /**
   * The ID of the user to follow
   */
  target_user_id: Snowflake;
}

/**
 * The response of following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface PostUserFollowResponse {
  data: PostUserFollowResponseData;
}

export interface PostUserFollowResponseData {
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

/**
 * The response of unfollowing a user
 */
export interface DeleteUserUnfollowResponse {
  data: DeleteUserUnfollowResponseData;
}

export interface DeleteUserUnfollowResponseData {
  /**
   * Indicates whether the authorized user unfollowed the specified user as a result of the request.
   * This value is `false` for a successful unfollow request
   */
  following: boolean;
}

/**
 * The body for blocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface PostUserBlockJSONBody {
  /**
   * The ID of the user to block
   */
  target_user_id: Snowflake;
}

/**
 * The response of blocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface PostUserBlockResponse {
  data: PostUserBlockResponseData;
}

export interface PostUserBlockResponseData {
  /**
   * Indicates whether the authorized user is blocking the specified user as a result of the request.
   * This value is `true` for a successful block request
   */
  blocking: boolean;
}

/**
 * The response of unblocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export interface DeleteUserUnblockResponse {
  data: DeleteUserUnblockResponseData;
}

export interface DeleteUserUnblockResponseData {
  /**
   * Indicates whether the authorized user is blocking the specified user as a result of the request.
   * This value is `false` for a successful unblock request
   */
  blocking: boolean;
}

/**
 * The body for muting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface PostUserMuteJSONBody {
  /**
   * The ID of the user to mute
   */
  target_user_id: Snowflake;
}

/**
 * The response of muting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface PostUserMuteResponse {
  data: PostUserMuteResponseData;
}

export interface PostUserMuteResponseData {
  /**
   * Indicates whether the authorized user is muting the specified user as a result of the request.
   * This value is `true` for a successful mute request
   */
  muting: boolean;
}

/**
 * The response of unmuting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting
 */
export interface DeleteUserUnmuteResponse {
  data: DeleteUserUnmuteResponseData;
}

export interface DeleteUserUnmuteResponseData {
  /**
   * Indicates whether the authorized user is muting the specified user as a result of the request.
   * This value is `false` for a successful unmute request
   */
  muting: boolean;
}
