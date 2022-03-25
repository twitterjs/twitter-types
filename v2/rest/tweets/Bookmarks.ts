import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching bookmarked tweets
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks
 */
export interface GETUsersIdBookmarksQuery extends MultipleTweetsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching bookmarked tweets
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks
 */
export interface GETUsersIdBookmarksResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		next_token?: string;
	};
}

/**
 * Generates route for fetching bookmarked tweets
 * - GET `/users/:id/bookmarks`
 * @param userId The user id whose bookmarked tweets are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks
 */
export function GETUsersIdBookmarksRoute(userId: string) {
	return `/users/${userId}/bookmarks` as const;
}

/**
 * The body for bookmarking a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks
 */
export interface POSTUsersIdBookmarksJSONBody {
	tweet_id: string;
}

/**
 * The response of bookmarking a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks
 */
export interface POSTUsersIdBookmarksResponse {
	data: {
		bookmarked: boolean;
	};
}

/**
 * Generates route for bookmarking a tweet:
 * - POST `/users/:id/bookmarks`
 * @param tweetId The tweet id to bookmark
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks
 */
export function POSTUsersIdBookmarksRoute(tweetId: string) {
	return `/users/${tweetId}/bookmarks` as const;
}

/**
 * The response of removing a bookmark of a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/delete-users-id-bookmarks-tweet_id
 */
export interface DELETEUsersIdBookmarksTweetIdResponse {
	data: {
		bookmarked: boolean;
	};
}

/**
 * Generates route for removing a bookmark of a tweet:
 * - DELETE `/users/:id/bookmarks/:tweet_id`
 * @param userId The user id whose bookmarked tweet is to be removed
 * @param tweetId The tweet whose bookmark is to be removed
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/delete-users-id-bookmarks-tweet_id
 */
export function DELETEUsersIdBookmarksTweetIdRoute(userId: string, tweetId: string) {
	return `/users/${userId}/bookmarks/${tweetId}` as const;
}
