import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from './UsersLookup';

/**
 * The query for fetching users muted by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting
 */
export interface GET_2_users_id_muting_Query extends MultipleUsersLookupQuery {
  max_results?: number;
  pagination_token?: string;
}

/**
 * The response of fetching users muted by a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting
 */
export interface GET_2_users_id_muting_Response extends MultipleUsersLookupResponse {
  meta: {
    result_count: number;
    previous_token?: string;
    next_token?: string;
  };
}

/**
 * The body for muting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface POST_2_users_id_muting_JSONBody {
  target_user_id: string;
}

/**
 * The response of muting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export interface POST_2_users_id_muting_Response {
  data: {
    muting: boolean;
  };
}

/**
 * The response of unmuting a user
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting
 */
export interface DELETE_2_users_source_user_id_muting_target_user_id_Response {
  data: {
    muting: boolean;
  };
}
