import type { Snowflake } from '../../payloads';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';
import type {
  SingleSpaceLookupQuery,
  SingleSpaceLookupResponse,
  MultipleSpacesLookupQuery,
  MultipleSpacesLookupResponse,
} from './index';

/**
 * The query for fetching a space by its id
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id
 */
export type GET_2_spaces_id_Query = SingleSpaceLookupQuery;

/**
 * The response of fetching a space by its id
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id
 */
export type GET_2_spaces_id_Response = SingleSpaceLookupResponse;

/**
 * The query for fetching spaces by their ids
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces
 */
export interface GET_2_spaces_Query extends MultipleSpacesLookupQuery {
  ids: Array<Snowflake>;
}

/**
 * The response of fetching spaces by their ids
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces
 */
export type GET_2_spaces_Response = MultipleSpacesLookupResponse;

/**
 * The query for fetching users who purchased a ticket for a space
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers
 */
export interface GET_2_spaces_id_buyers_Query extends MultipleUsersLookupQuery {
  pagination_token?: string;
}

// TODO: verify this response
/**
 * The response of fetching users who purchased a ticket for a space
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers
 */
export interface GET_2_spaces_id_buyers_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The query for fetching spaces created by users
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids
 */
export interface GET_2_spaces_by_creator_ids_Query extends MultipleSpacesLookupQuery {
  user_ids: Array<string>;
}

// TODO: verify this response
/**
 * The response of fetching spaces created by users
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids
 */
export interface GET_2_spaces_by_creator_ids_Response extends MultipleSpacesLookupResponse {
  meta: {
    result_count: number;
  };
}
