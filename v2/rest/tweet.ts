import type { APIMediaField, APIPlaceField, APIPollField, APITweetField, APIUserField } from './misc';
import type { APIMediaObject, APIPlaceObject, APIPollObject, APITweetObject, APIUserObject } from '../payloads/index';

/**
 * Returns a variety of information about a single Tweet specified by the requested ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export interface GetSingleTweetByIdQuery {
  expansions?: Array<APITweetExpansion>;

  'media.fields'?: Array<APIMediaField>;

  'place.fields'?: Array<APIPlaceField>;

  'poll.fields'?: Array<APIPollField>;

  'tweet.fields'?: Array<APITweetField>;

  'user.fields'?: Array<APIUserField>;
}

export type APITweetExpansion =
  | 'attachments.poll_ids'
  | 'attachments.media_keys'
  | 'author_id'
  | 'entities.mentions.username'
  | 'geo.place_id'
  | 'in_reply_to_user_id'
  | 'referenced_tweets.id'
  | 'referenced_tweets.id.author_id';

export interface GetSingleTweetByIdResponse {
  data: APITweetObject;
  includes?: APITweetIncludes;
}

export interface APITweetIncludes {
  tweets?: Array<APITweetObject>;
  users?: Array<APIUserObject>;
  places?: Array<APIPlaceObject>;
  media?: Array<APIMediaObject>;
  polls?: Array<APIPollObject>;
}

/**
 * Returns a variety of information about Tweets specified by the requested of IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export interface GetMultipleTweetsByIdsQuery extends GetSingleTweetByIdQuery {
  /**
   * A comma separated list of Tweet IDs. Up to 100 are allowed in a single request
   */
  ids: Array<string>;
}

export interface GetMultipleTweetsByIdsResponse {
  data: Array<APITweetObject>;
  includes?: APITweetIncludes;
}
