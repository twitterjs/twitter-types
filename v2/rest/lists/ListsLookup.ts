import type {
  SingleListLookupQuery,
  SingleListLookupResponse,
  MultipleListsLookupQuery,
  MultipleListsLookupResponse,
} from './index';

/**
 * The query for fetching a list by its id
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id
 */
export type GET_2_lists_id_Query = SingleListLookupQuery;

/**
 * The response of fetching a list by its id
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id
 */
export type GET_2_lists_id_Response = SingleListLookupResponse;

/**
 * The query for fetching all lists owned by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists
 */
export interface GET_2_users_id_owned_lists_Query extends MultipleListsLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching all lists owned by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists
 */
export interface GET_2_users_id_owned_lists_Response extends MultipleListsLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}
