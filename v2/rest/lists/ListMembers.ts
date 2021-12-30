import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '..';
import type { Snowflake } from '../..';
import type { MultipleListsLookupQuery, MultipleListsLookupResponse } from './ListsLookup';

/**
 * The query for fetching users who are members of a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-lists-id-members
 */
export interface GET_2_lists_id_members_Query extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users who are members of a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-lists-id-members
 */
export interface GET_2_lists_id_members_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The query for fetching lists in which a user is member
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export interface GET_2_users_id_list_memberships_Query extends MultipleListsLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching lists in which a user is member
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export interface GET_2_users_id_list_memberships_Response extends MultipleListsLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The body for adding a member to a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members
 */
export interface POST_2_lists_id_members_JSONBody {
  user_id: Snowflake;
}

/**
 * The response of adding a member to a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members
 */
export interface POST_2_lists_id_members_Response {
  data: {
    is_member: boolean;
  };
}

/**
 * The response of removing a member from a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id
 */
export interface DELETE_2_lists_id_members_user_id_Response {
  data: {
    is_member: boolean;
  };
}
