import type { MultipleSpacesLookupQuery, MultipleSpacesLookupResponse } from './SpacesLookup';

/**
 * The query for fetching spaces by search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search
 */
export interface GET_2_spaces_search_Query extends MultipleSpacesLookupQuery {
  query: string;
  state?: 'all' | 'live' | 'scheduled';
  max_results?: number;
}

/**
 * The response of fetching spaces by search query
 *
 * https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search
 */
export interface GET_2_spaces_search_Response extends MultipleSpacesLookupResponse {
  meta: {
    result_count: number;
  };
}
