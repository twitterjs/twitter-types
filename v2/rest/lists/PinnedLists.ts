import type { MultipleListsLookupQuery, MultipleListsLookupResponse } from './index';

/**
 * The query for fetching list pinned by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists
 */
export interface GETUsersIdPinnedListsQuery extends MultipleListsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching list pinned by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists
 */
export interface GETUsersIdPinnedListsResponse extends MultipleListsLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching lists pinned by a user:
 * - GET `/users/:id/pinned_lists`
 * @param userId The user id whose pinned lists are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists
 */
export function GETUsersIdPinnedListsRoute(userId: string) {
	return `/users/${userId}/pinned_lists` as const;
}

/**
 * The body for pinning a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists
 */
export interface POSTUsersIdPinnedListsJSONBody {
	list_id: string;
}

/**
 * The respone of pinning a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists
 */
export interface POSTUsersIdPinnedListsResponse {
	data: {
		pinned: boolean;
	};
}

/**
 * Generates route for pinning a list:
 * - POST `/users/:id/pinned_lists`
 * @param userId The user id to make the request on behalf of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists
 */
export function POSTUsersIdPinnedListsRoute(userId: string) {
	return `/users/${userId}/pinned_lists` as const;
}

/* eslint-disable max-len */
/**
 * The response of unpinning a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id
 */
export interface DELETEUsersIdPinnedListsListIdResponse {
	data: {
		pinned: false;
	};
}

/**
 * Generates route for unpinning a list:
 * - DELETE `/users/:id/pinned_lists/:list_id`
 * @param userId The user id to make the request on behalf of
 * @param listId The list id to unpin
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id
 */
export function DELETEUsersIdPinnedListsListIdRoute(userId: string, listId: string) {
	return `/users/${userId}/pinned_lists/${listId}` as const;
}
/* eslint-enable max-len */
