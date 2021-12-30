import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '..';
import type { Snowflake } from '../..';
import type { MultipleListsLookupQuery, MultipleListsLookupResponse } from './ListsLookup';

/**
 * The query for fetching users who are followers of a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-lists-id-followers
 */
export interface GET_2_lists_id_followers_Query extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users who are followers of a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-lists-id-followers
 */
export interface GET_2_lists_id_followers_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The query for fetching lists that a user follows
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists
 */
export interface GET_2_users_id_followed_lists_Query extends MultipleListsLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching lists that a user follows
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists
 */
export interface GET_2_users_id_followed_lists_Response extends MultipleListsLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The body for following a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists
 */
export interface POST_2_users_id_followed_lists_JSONBody {
  list_id: Snowflake;
}

/**
 * The response of following a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists
 */
export interface POST_2_users_id_followed_lists_Response {
  data: {
    following: boolean;
  };
}

/* eslint-disable max-len */
/**
 * The response of unfollowing a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id
 */
export interface DELETE_2_users_id_followed_lists_list_id_Response {
  data: {
    following: boolean;
  };
}
/* eslint-enable max-len */
