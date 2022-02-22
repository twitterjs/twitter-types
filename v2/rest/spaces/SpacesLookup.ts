import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from '../tweets';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';
import type {
	SingleSpaceLookupQuery,
	SingleSpaceLookupResponse,
	MultipleSpacesLookupQuery,
	MultipleSpacesLookupResponse,
} from './index';

/**
 * The query for fetching a space by its id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id
 */
export type GETSpacesIdQuery = SingleSpaceLookupQuery;

/**
 * The response of fetching a space by its id
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id
 */
export type GETSpacesIdResponse = SingleSpaceLookupResponse;

/**
 * Generates route for fetching a space by its id
 * - GET `/spaces/:id`
 * @param spaceId The space id to fetch
 */
export function GETSpacesIdRoute(spaceId: string) {
	return `/spaces/${spaceId}` as const;
}

/**
 * The query for fetching spaces by their ids
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces
 */
export interface GETSpacesQuery extends MultipleSpacesLookupQuery {
	ids: Array<string>;
}

/**
 * The response of fetching spaces by their ids
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces
 */
export type GETSpacesResponse = MultipleSpacesLookupResponse;

/**
 * Generates route for fetching spaces by their ids:
 * - GET `/spaces`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces
 */
export function GETSpacesRoute() {
	return `/spaces` as const;
}

/**
 * The query for fetching users who purchased a ticket for a space
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers
 */
export interface GETSpacesIdBuyersQuery extends MultipleUsersLookupQuery {
	pagination_token?: string;
}

// TODO: verify this response
/**
 * The response of fetching users who purchased a ticket for a space
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers
 */
export interface GETSpacesIdBuyersResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching users who purchased a ticket for a space:
 * - GET `/spaces/:id/buyers`
 * @param spaceId The space id whose buyers are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers
 */
export function GETSpacesIdBuyersRoute(spaceId: string) {
	return `/spaces/${spaceId}/buyers` as const;
}

/**
 * The query for fetching spaces created by users
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids
 */
export interface GETSpacesByCreatorIdsQuery extends MultipleSpacesLookupQuery {
	user_ids: Array<string>;
}

// TODO: verify this response
/**
 * The response of fetching spaces created by users
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids
 */
export interface GETSpacesByCreatorIdsResponse extends MultipleSpacesLookupResponse {
	meta: {
		result_count: number;
	};
}

/**
 * Generates route for fetching spaces created by users:
 * - GET `/spaces/by/creator_ids`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids
 */
export function GETSpacesByCreatorIdsRoute() {
	return `/spaces/by/creator_ids` as const;
}

/**
 * The query for fetching tweets shared in a space
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets
 */
export interface GETSpacesIdTweetsQuery extends MultipleTweetsLookupQuery {
	max_results?: number;
}

/**
 * The response of fetching tweets shared in a space
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets
 */
export interface GETSpacesIdTweetsResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
	};
}

/**
 * Generates route for fetching tweets shared in a space:
 * - GET `/spaces/:id/tweets`
 * @param spaceId The space id whose shared tweets are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets
 */
export function GETSpacesIdTweetsRoute(spaceId: string) {
	return `/spaces/${spaceId}/tweets`;
}
