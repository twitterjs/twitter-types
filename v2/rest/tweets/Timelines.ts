import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching tweets composed by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export interface GETUsersIdTweetsQuery extends MultipleTweetsLookupQuery {
	end_time?: string;
	max_results?: number;
	pagination_token?: string;
	since_id?: string;
	start_time?: string;
	until_id?: string;
	exclude?: Array<'retweets' | 'replies'>;
}

/**
 * The response of fetching tweets composed by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export interface GETUsersIdTweetsResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		newest_id: string;
		oldest_id: string;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching tweets composed by a user:
 * - GET `/users/:id/tweets`
 * @param userId The user id whose tweets are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export function GETUsersIdTweetsRoute(userId: string) {
	return `/users/${userId}/tweets` as const;
}

/**
 * The query for fetching tweets mentioning a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export interface GETUsersIdMentionsQuery extends MultipleTweetsLookupQuery {
	end_time?: string;
	max_results?: number;
	pagination_token?: string;
	since_id?: string;
	start_time?: string;
	until_id?: string;
}

/**
 * The response of fetching tweets mentioning a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export interface GETUsersIdMentionsResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		newest_id: string;
		oldest_id: string;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching tweets mentioning a user:
 * - GET `/users/:id/mentions`
 * @param userId The user id that the tweets mention
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export function GETUsersIdMentionsRoute(userId: string) {
	return `users/${userId}/mentions` as const;
}
