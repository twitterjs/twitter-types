import type { Snowflake } from '../..';
import type { MultipleListsLookupQuery, MultipleListsLookupResponse } from './ListsLookup';

/**
 * The query for fetching list pinned by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists
 */
export type GET_2_users_id_pinned_lists_Query = MultipleListsLookupQuery;

/**
 * The response of fetching list pinned by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists
 */
export interface GET_2_users_id_pinned_lists_Response extends MultipleListsLookupResponse {
  meta: {
    result_count: number;
  };
}

/**
 * The body for pinning a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists
 */
export interface POST_2_users_id_pinned_lists_JSONBody {
  list_id: Snowflake;
}

/**
 * The respone of pinning a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists
 */
export interface POST_2_users_id_pinned_lists_Response {
  data: {
    pinned: boolean;
  };
}

/* eslint-disable max-len */
/**
 * The response of unpinning a list
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id
 */
export interface DELETE_2_users_id_pinned_lists_list_id_JSONBody {
  data: {
    pinned: false;
  };
}
/* eslint-enable max-len */
