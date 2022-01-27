import type { MultipleSpacesLookupQuery, MultipleSpacesLookupResponse } from './index';

/**
 * The query for fetching spaces by search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search
 */
export interface GETSpacesSearchQuery extends MultipleSpacesLookupQuery {
	query: string;
	state?: 'all' | 'live' | 'scheduled';
	max_results?: number;
}

/**
 * The response of fetching spaces by search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search
 */
export interface GETSpacesSearchResponse extends MultipleSpacesLookupResponse {
	meta: {
		result_count: number;
	};
}

/**
 * Generates route for fetching spaces by search query:
 * - GET `/spaces/search`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search
 */
export function GETSpacesSearchRoute() {
	return `/spaces/search` as const;
}
