import type { Snowflake } from '../../payloads';

/**
 * The body for creating a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export interface POSTListsJSONBody {
	/**
	 * The name of the list
	 */
	name: string;

	/**
	 * The description of the list
	 */
	description?: string;

	/**
	 * Whether the list should be private
	 */
	private?: boolean;
}

/**
 * The response of creating a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export interface POSTListsResponse {
	data: {
		/**
		 * The id of the list
		 */
		id: Snowflake;
		/**
		 * The name of the list
		 */
		name: string;
	};
}

/**
 * Generates route for creating a list:
 * - POST `/lists`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export function POSTListsRoute() {
	return `/lists` as const;
}

/**
 * The response of deleting a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id
 */
export interface DELETEListsIdResponse {
	data: {
		deleted: boolean;
	};
}

/**
 * Generates route for deleting a list:
 * - DELETE `/lists/:id`
 * @param listId The list id to delete
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id
 */
export function DELETEListsIdRoute(listId: Snowflake) {
	return `/lists/${listId}` as const;
}

/**
 * The body for updating a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export type PUTListsIdJSONBody = Partial<POSTListsJSONBody>;

/**
 * The response of updating a list
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export interface PUTListsIdResponse {
	data: {
		updated: boolean;
	};
}

/**
 * Generates route for updating a list:
 * - PUT `/lists/:id`
 * @param listId The list id to update
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export function PUTListsIdRoute(listId: Snowflake) {
	return `/lists/${listId}` as const;
}
