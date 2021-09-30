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
