import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';
import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching users who liked a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users
 */
export interface GETTweetsIdLikingUsersQuery extends MultipleUsersLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching users who liked a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users
 */
export interface GETTweetsIdLikingUsersResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching users who liked a tweet:
 * - GET `/tweets/:id/liking_users`
 * @param tweetId The tweet id whose liking users are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users
 */
export function GETTweetsIdLikingUsersRoute(tweetId: string) {
	return `/tweets/${tweetId}/liking_users` as const;
}

/**
 * The query for fetching tweets liked by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets
 */
export interface GETUsersIdLikedTweetsQuery extends MultipleTweetsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching tweets liked by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets
 */
export interface GETUsersIdLikedTweetsResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		next_token?: string;
		previous_token?: string;
	};
}

/**
 * Generates route for fetching tweets liked by a user:
 * - GET `/users/:id/liked_tweets`
 * @param userId The user id whose liked tweets are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets
 */
export function GETUsersIdLikedTweetsRoute(userId: string) {
	return `/users/${userId}/liked_tweets` as const;
}

/**
 * The body for liking a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface POSTUsersIdLikesJSONBody {
	tweet_id: string;
}

/**
 * The response of liking a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface POSTUsersIdLikesResponse {
	data: {
		liked: boolean;
	};
}

/**
 * Generates route for liking a tweet:
 * - POST `/users/:id/likes`
 * @param userId The user id to like the tweet on behalf of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export function POSTUsersIdLikesRoute(userId: string) {
	return `/users/${userId}/likes` as const;
}

/**
 * The response of unliking a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id
 */
export interface DELETEUsersIdLikesTweetIdResponse {
	data: {
		liked: boolean;
	};
}

/**
 * Generates route for unliking a tweet:
 * - DELETE `/users/:id/likes/:tweet_id`
 * @param userId The user id to unlike the tweet on behalf of
 * @param tweetId The tweet id to unlike
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id
 */
export function DELETEUsersIdLikesTweetIdRoute(userId: string, tweetId: string) {
	return `/users/${userId}/likes/${tweetId}` as const;
}
