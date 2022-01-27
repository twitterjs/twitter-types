import type { Snowflake } from '../../payloads';
import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from '../tweets';

/**
 * The query for fetching tweets from a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets
 */
export interface GETListsIdTweetsQuery extends MultipleTweetsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching tweets from a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets
 */
export interface GETListsIdtweetsResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching tweets from a list:
 * - GET `/lists/:id/tweets`
 * @param listId The list id to fetch the tweets from
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets
 */
export function GETListsIdTweetsRoute(listId: Snowflake) {
	return `/lists/${listId}/tweets` as const;
}
