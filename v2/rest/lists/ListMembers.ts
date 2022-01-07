import type { Snowflake } from '../../payloads';
import type { MultipleListsLookupQuery, MultipleListsLookupResponse } from './index';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';

/**
 * The query for fetching users who are members of a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-lists-id-members
 */
export interface GETListsIdMembersQuery extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users who are members of a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-lists-id-members
 */
export interface GETListsIdMembersResponse extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * Generates route for fetching members of a list:
 * - GET `/lists/:id/members`
 * @param listId The list id to fetch members of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-lists-id-members
 */
export function GETListsIdMembersRoute(listId: Snowflake) {
  return `/lists/${listId}/members` as const;
}

/**
 * The query for fetching lists in which a user is member
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export interface GETUsersIdListMembershipsQuery extends MultipleListsLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching lists in which a user is member
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export interface GETUsersIdListMembershipsResponse extends MultipleListsLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * Generates route for fetching lists in which a user is member:
 * - GET `/users/:id/list_memberships`
 * @param userId The user id to fetch list membership of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export function GETUsersIdListMembershipsRoute(userId: Snowflake) {
  return `/users/${userId}/list_memberships` as const;
}

/**
 * The body for adding a member to a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members
 */
export interface POSTListsIdMembersJSONBody {
  user_id: Snowflake;
}

/**
 * The response of adding a member to a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members
 */
export interface POSTListsIdMembersResponse {
  data: {
    is_member: boolean;
  };
}

/**
 * Generates route for adding a member to a list:
 * - `POST /lists/:id/members`
 * @param listId The list id to add the member to
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members
 */
export function POSTListsIdMembersRoute(listId: Snowflake) {
  return `/lists/${listId}/members` as const;
}

/* eslint-disable max-len */
/**
 * The response of removing a member from a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id
 */
export interface DELETEListsIdMembersUserIdResponse {
  data: {
    is_member: boolean;
  };
}

/**
 * Generates route for removing a member from a list:
 * - DELETE `/lists/:id/members/:user_id`
 * @param listId The list id to remove the member from
 * @param userId The user id to remove from the list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id
 */
export function DELETEListsIdMembersUserIdRoute(listId: Snowflake, userId: Snowflake) {
  return `/lists/${listId}/members/${userId}` as const;
}
/* eslint-enable max-len */
