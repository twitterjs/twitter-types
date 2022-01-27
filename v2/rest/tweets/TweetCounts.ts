/**
 * The query for fetching count of recent tweets that match a search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent
 */
export interface GETTweetsCountsRecentQuery {
	query: string;
	end_time?: string;
	granularity?: 'minute' | 'hour' | 'day';
	since_id?: string;
	start_time?: string;
	until_id?: string;
	next_token?: string; // TODO: confirm this field
}

/**
 * The response of fetching count of recent tweets that match a search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent
 */
export interface GETTweetsCountsRecentResponse {
	data: Array<{
		end: string;
		start: string;
		tweet_count: number;
	}>;
	meta: {
		next_token?: string; // TODO: confirm this field
		total_tweet_count: number;
	};
}

/**
 * Generates route for fetching count of recent tweets that match a search query:
 * - GET `/tweets/counts/recent`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent
 */
export function GETTweetsCountsRecentRoute() {
	return `/tweets/counts/recent` as const;
}

/**
 * The query for fetching count of full-archive tweets that match a search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-all
 */
export type GETTweetsCountsAllQuery = GETTweetsCountsRecentQuery;

/**
 * The response of fetching count of full-archive tweets that match a search query
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-all
 */
export type GETTweetsCountsAllResponse = GETTweetsCountsRecentResponse;

/**
 * Generates route for fetching count of full-archive tweets that match a search query:
 * - GET `/tweets/counts/all`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-all
 */
export function GETTweetsCountsAllRoute() {
	return `/tweets/counts/all` as const;
}
