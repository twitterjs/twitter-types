import type { APITweet, APIUser, Snowflake } from '../payloads/index';
import type { TweetFieldsParameter, UserFieldsParameter } from './misc';

export interface SingleUserLookupResponse {
  data: APIUser;
  includes?: APIUserExpansions;
  errors?: any; // TODO
}

export interface APIUserExpansions {
  tweets?: Array<APITweet>;
}

export interface MultiUserLookupResponse {
  data: Array<APIUser>;
  includes?: APIUserExpansions;
  errors?: any; // TODO
}

export interface MultipleUsersLookupWithCountResponse extends MultiUserLookupResponse {
  meta: {
    /**
     * The number of user results returned in this response
     */
    result_count: number;
  };
}

export type UserExpansionsParameter = 'pinned_tweet_id';

export interface SingleUserLookupQuery {
  expansions?: Array<UserExpansionsParameter>;
  'tweet.fields'?: Array<TweetFieldsParameter>;
  'user.fields'?: Array<UserFieldsParameter>;
}

/**
 * The query for fetching a single user by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export type GetSingleUserByIdQuery = SingleUserLookupQuery;

/**
 * The response for the request of fetching a single user by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export type GetSingleUserByIdResponse = SingleUserLookupResponse;

/**
 * The query for fetching multiple users by IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export interface GetMultipleUsersByIdsQuery extends SingleUserLookupQuery {
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
export type GetMultipleUsersByIdsResponse = MultiUserLookupResponse;

/**
 * The query for fetching a single user by username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
// eslint-disable-next-line prettier/prettier
export type GetSingleUserByUsernameQuery = SingleUserLookupQuery;

/**
 * The response for the request of fetching a single user by username
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
// eslint-disable-next-line prettier/prettier
export type GetSingleUserByUsernameResponse = SingleUserLookupResponse;

/**
 * The query for fetching multiple users by usernames
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export interface GetMultipleUsersByUsernamesQuery extends SingleUserLookupQuery {
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
export type GetMultipleUsersByUsernamesResponse = MultiUserLookupResponse;

/**
 * The body for following a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface PostUsersFollowingJSONBody {
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
export interface PostUsersFollowingResponse {
  data: {
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
  };

  errors?: any; // TODO
}

/**
 * The response of unfollowing a user
 */
export interface DeleteUsersFollowingResponse {
  data: {
    /**
     * Indicates whether the authorized user unfollowed the specified user as a result of the request.
     * This value is `false` for a successful unfollow request
     */
    following: boolean;
  };

  errors?: any; // TODO
}

/**
 * The body for blocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export interface PostUsersBlockingJSONBody {
  /**
   * The ID of the user to block
   */
  target_user_id: Snowflake;
}

export interface UsersBlockingMutationResponse {
  data: {
    /**
     * Indicates whether the authorized user is blocking the specified user
     */
    blocking: boolean;
  };

  errors?: any; // TODO
}

/**
 * The response of blocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking
 */
export type PostUsersBlockingResponse = UsersBlockingMutationResponse;

/**
 * The response of unblocking a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking
 */
export type DeleteUsersBlockingResponse = UsersBlockingMutationResponse;

/**
 * The body for muting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface PostUsersMutingJSONBody {
  /**
   * The ID of the user to mute
   */
  target_user_id: Snowflake;
}

export interface UsersMutingMutationResponse {
  data: {
    /**
     * Indicates whether the authorized user is muting the specified user as a result of the request.
     * This value is `true` for a successful mute request
     */
    muting: boolean;
  };

  errors?: any; // TODO
}

/**
 * The response of muting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export type PostUsersMutingResponse = UsersMutingMutationResponse;

/**
 * The response of unmuting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting
 */
export type DeleteUsersMutingResponse = UsersMutingMutationResponse;

export interface UsersPaginatedQuery extends SingleUserLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

export interface UsersPaginatedResponse extends MultiUserLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

export type GetUsersFollowersQuery = UsersPaginatedQuery;

export type GetUsersFollowersResponse = UsersPaginatedResponse;

export type GetUsersFollowingQuery = UsersPaginatedQuery;

export type GetUsersFollowingResponse = UsersPaginatedResponse;
