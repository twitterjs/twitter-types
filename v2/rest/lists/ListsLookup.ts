import type {
	SingleListLookupQuery,
	SingleListLookupResponse,
	MultipleListsLookupQuery,
	MultipleListsLookupResponse,
} from './index';

/**
 * The query for fetching a list by its id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id
 */
export type GETListsIdQuery = SingleListLookupQuery;

/**
 * The response of fetching a list by its id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id
 */
export type GETListsIdResponse = SingleListLookupResponse;

/**
 * Generates a route for fetching a list by its id:
 * - GET `/lists/:id`
 * @param listId The list id to fetch
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id
 */
export function GETListsIdRoute(listId: string) {
	return `/lists/${listId}` as const;
}

/**
 * The query for fetching all lists owned by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists
 */
export interface GETUsersIdOwnedListsQuery extends MultipleListsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching all lists owned by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists
 */
export interface GETUsersIdOwnedListsResponse extends MultipleListsLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching lists owned by a user:
 * - GET `/users/:id/owned_lists`
 * @param userId The user id whose owned lists are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists
 */
export function GETUsersIdOwnedListsRoute(userId: string) {
	return `/users/${userId}/owned_lists` as const;
}
