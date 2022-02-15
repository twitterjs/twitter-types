import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from './index';

/**
 * The query for fetching users followed by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following
 */
export interface GETUsersIdFollowingQuery extends MultipleUsersLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching users followed by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following
 */
export interface GETUsersIdFollowingResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching users followed by a user:
 * - GET `/users/:id/following`
 * @param userId The user id whose following is to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following
 */
export function GETUsersIdFollowingRoute(userId: string) {
	return `/users/${userId}/following` as const;
}

/**
 * The query for fetching followers of a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export interface GETUsersIdFollowersQuery extends MultipleUsersLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching followers of a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export interface GETUsersIdFollowersResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching followers of a user:
 * - GET `/users/:id/followers`
 * @param userId The user id whose followers are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export function GETUsersIdFollowersRoute(userId: string) {
	return `/users/${userId}/followers` as const;
}

/* eslint-disable max-len */
/**
 * The body for following a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface POSTUsersIdFollowingJSONBody {
	target_user_id: string;
}

/**
 * The response of following a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export interface POSTUsersIdFollowingResponse {
	data: {
		following: boolean;
		pending_follow: boolean;
	};
}

/**
 * Generates route for following a user:
 * - POST `/users/:id/following`
 * @param userId The user id to make request on behalf of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export function POSTUsersIdFollowingRoute(userId: string) {
	return `/users/${userId}/following` as const;
}
/* eslint-enable max-len */

/**
 * The response of unfollowing a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following
 */
export interface DELETEUsersSourceUserIdFollowingTargetUserIdResponse {
	data: {
		following: boolean;
	};
}

/**
 * Generates route for unfollowing a user:
 * - DELETE `/users/:source_user_id/following/:target_user_id`
 * @param sourceUserId The user id to make request on behalf of
 * @param targetUserId The user id to unfollow
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following
 */
export function DELETEUsersSourceUserIdFollowingTargetUserIdRoute(sourceUserId: string, targetUserId: string) {
	return `/users/${sourceUserId}/following/${targetUserId}` as const;
}
