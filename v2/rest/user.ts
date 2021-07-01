import type { APITweetObject, APIUserObject } from '../payloads';
import type { APITweetField, APIUserField } from './misc';

/**
 * The query for fetching a single user by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export interface GetSingleUserByIdQuery {
  expansions?: Array<GetSingleUserByIdQueryExpansion>;

  'tweet.fields'?: Array<APITweetField>;

  'user.fields'?: Array<APIUserField>;
}

export type GetSingleUserByIdQueryExpansion = 'pinned_tweet_id';

/**
 * The response for the request of fetching a single user by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export interface GetSingleUserByIdResponse {
  data: APIUserObject;
  includes?: GetSingleUserByIdResponseIncludes;
}

export interface GetSingleUserByIdResponseIncludes {
  tweets?: Array<APITweetObject>;
}
