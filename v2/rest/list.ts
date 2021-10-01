import type { APIList, Snowflake } from '../payloads';

/**
 * The body for creating a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export interface PostListCreateJSONBody {
  /**
   * The name of the list
   */
  name: string;

  /**
   * The description of the list
   */
  description?: string;

  /**
   * Whether the list should be private
   */
  private?: boolean;
}

/**
 * The response of creating a list
 */
export interface PostListCreateResponse {
  data: APIList;
  errors: any; // TODO
}

/**
 * The response of deleting a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id
 */
export interface DeleteListDeleteResponse {
  data: {
    /**
     * Whether the list specified in the request has been deleted
     */
    deleted: boolean;
  };
  errors: any; // TODO
}

/**
 * The body for updating a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export type PutListUpdateJSONBody = Partial<PostListCreateJSONBody>;

/**
 * The response of updating a list
 */
export interface PutListUpdateResponse {
  data: {
    /**
     * Whether the list specified in the request has been updated
     */
    updated: boolean;
  };
  errors: any; // TODO
}

/**
 * The body for adding a member to a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists-id-members
 */
export interface PostListAddMemberJSONBody {
  /**
   * The ID of the user to add as a member of the list
   */
  user_id: Snowflake;
}

/**
 * The response of adding a member to a list
 */
export interface PostListAddMemberResponse {
  data: {
    /**
     * Whether the member specified in the request has been added to the list
     */
    is_member: boolean;
  };
  errors: any; // TODO
}

/**
 * The response of removing a member from a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id-members-user_id
 */
export interface DeleteListRemoveMemberResponse {
  data: {
    /**
     * Whether the member specified in the request has been removed from the list
     */
    is_member: boolean;
  };
  errors: any; // TODO
}

/**
 * The body for following a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-users-id-followed-lists
 */
export interface PostListFollowJSONBody {
  /**
   * The ID of the list to follow
   */
  list_id: Snowflake;
}

/**
 * The response of following a list
 */
export interface PostListFollowResponse {
  data: {
    /**
     * Whether the user followed the specified list as a result of the request
     */
    following: boolean;
  };
  errors: any; // TODO
}

/**
 * The response of unfollowing a list
 */
export interface PostListUnfollowResponse {
  data: {
    /**
     * Whether the user unfollowed the specified list as a result of the request
     */
    following: boolean;
  };
  errors: any; // TODO
}

/**
 * The body for pinning a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-users-id-pinned-lists
 */
export interface PostListPinJSONBody {
  /**
   * The ID of the list to pin
   */
  list_id: string;
}

/**
 * The response of pinning a list
 */
export interface PostListPinResponse {
  data: {
    /**
     * Whether the user pinned the specified list as a result of the request
     */
    pinned: boolean;
  };
  errors: any; // TODO
}

/**
 * The response of unpinning a list
 */
export interface PostListUnpinResponse {
  data: {
    /**
     * Whether the user unpinned the specified list as a result of the request
     */
    pinned: boolean;
  };
  errors: any; // TODO
}
