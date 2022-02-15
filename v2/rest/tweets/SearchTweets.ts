import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching recent tweets by search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
 */
export interface GETTweetsSearchRecentQuery extends MultipleTweetsLookupQuery {
	query: string;
	next_token?: string;
	end_time?: string;
	max_results?: number;
	since_id?: string;
	start_time?: string;
	until_id?: string;
	sort_order?: 'recency' | 'relevancy';
}

/**
 * The response of fetching recent tweets by search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
 */
export interface GETTweetsSearchRecentResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		newest_id: string;
		oldest_id: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching recent tweets by search query:
 * - GET `/tweets/search/recent`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
 */
export function GETTweetsSearchRecentRoute() {
	return `/tweets/search/recent` as const;
}

/**
 * The query for fetching full-archive tweets by search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export type GETTweetsSearchAllQuery = GETTweetsSearchRecentQuery;

/**
 * The response of fetching full-archive tweets by search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export type GETTweetsSearchAllResponse = GETTweetsSearchRecentResponse;

/**
 * Generates route for fetching full-archive tweets by search query:
 * - GET `/tweets/search/all`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export function GETTweetsSearchAllRoute() {
	return `/tweets/search/all` as const;
}
