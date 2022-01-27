import type { Snowflake } from '../../payloads';
import type { MultipleListsLookupQuery, MultipleListsLookupResponse } from './index';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';

/**
 * The query for fetching users who are followers of a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-lists-id-followers
 */
export interface GETListsIdFollowersQuery extends MultipleUsersLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching users who are followers of a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-lists-id-followers
 */
export interface GETListsIdFollowersResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching users who are followers of a list:
 * - GET `/lists/:id/followers`
 * @param listId The list id to fetch followers of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-lists-id-followers
 *
 */
export function GETListsIdFollowersRoute(listId: Snowflake) {
	return `/lists/${listId}/followers` as const;
}

/**
 * The query for fetching lists that a user follows
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists
 */
export interface GETUsersIdFollowedListsQuery extends MultipleListsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching lists that a user follows
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists
 */
export interface GETUsersIdFollowedListsResponse extends MultipleListsLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching lists followed by a user:
 * - GET `/users/:id/followed_lists`
 * @param userId The user id whose followed lists are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference
 */
export function GETUsersIdFollowedListsRoute(userId: Snowflake) {
	return `/users/${userId}/followed_lists` as const;
}

/**
 * The body for following a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists
 */
export interface POSTUsersIdFollowedListsJSONBody {
	list_id: Snowflake;
}

/**
 * The response of following a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists
 */
export interface POSTUsersIdFollowedListsResponse {
	data: {
		following: boolean;
	};
}

/**
 * Generates route for following a list:
 * - GET `/users/:id/followed_lists`
 * @param userId The user id to make the request on behalf of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference
 */
export function POSTUsersIdFollowedListsRoute(userId: Snowflake) {
	return `/users/${userId}/followed_lists` as const;
}

/* eslint-disable max-len */
/**
 * The response of unfollowing a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id
 */
export interface DELETEUsersIdFollowedListsListIdResponse {
	data: {
		following: boolean;
	};
}

/**
 * Generates route for unfollowing a list:
 * - DELETE `/users/:id/followed_lists/:list_id`
 * @param userId The user id to make the request on behalf of
 * @param listId The list id to unfollow
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id
 */
export function DELETEUsersIdFollowedListsListIdRoute(userId: Snowflake, listId: Snowflake) {
	return `/users/${userId}/followed_lists/${listId}` as const;
}
/* eslint-enable max-len */
