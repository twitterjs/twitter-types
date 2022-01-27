import type { Snowflake } from '../../payloads';
import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from './index';

/**
 * The query for fetching users muted by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting
 */
export interface GETUsersIdMutingQuery extends MultipleUsersLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching users muted by a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting
 */
export interface GETUsersIdMutingResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching users muted by a user:
 * - GET `/users/:id/muting`
 * @param userId The user id whose muted users are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting
 */
export function GETUsersIdMutingRoute(userId: Snowflake) {
	return `/users/${userId}/muting` as const;
}

/**
 * The body for muting a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface POSTUsersIdMutingJSONBody {
	target_user_id: string;
}

/**
 * The response of muting a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface POSTUsersIdMutingResponse {
	data: {
		muting: boolean;
	};
}

/**
 * Generates route for muting a user:
 * - POST `/users/:id/muting`
 * @param userId The user id to make request on behalf of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export function POSTUsersIdMutingRoute(userId: Snowflake) {
	return `/users/${userId}/muting` as const;
}

/**
 * The response of unmuting a user
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting
 */
export interface DELETEUsersSourceUserIdMutingTargetUserIdResponse {
	data: {
		muting: boolean;
	};
}

/**
 * Generates route for unmuting a user:
 * - DELETE `/users/:source_user_id/muting/:target_user_id`
 * @param sourceUserId The user id to make request on behalf of
 * @param targetUserId The user id to unmute
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting
 */
export function DELETEUsersSourceUserIdMutingTargetUserId(sourceUserId: Snowflake, targetUserId: Snowflake) {
	return `/users/${sourceUserId}/muting/${targetUserId}` as const;
}
