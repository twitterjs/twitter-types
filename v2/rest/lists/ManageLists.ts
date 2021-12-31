import type { Snowflake } from '../../payloads';

/**
 * The body for creating a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export interface POST_2_lists_JSONBody {
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
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export interface POST_2_lists_Response {
  data: {
    /**
     * The id of the list
     */
    id: Snowflake;
    /**
     * The name of the list
     */
    name: string;
  };
}

/**
 * The response of deleting a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id
 */
export interface DELETE_2_lists_id_Response {
  data: {
    deleted: boolean;
  };
}

/**
 * The body for updating a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export type PUT_2_lists_id_JSONBody = Partial<POST_2_lists_JSONBody>;

/**
 * The response of updating a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export interface PUT_2_lists_id_Response {
  data: {
    updated: boolean;
  };
}
