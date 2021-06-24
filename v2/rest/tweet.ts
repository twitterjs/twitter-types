import type { APIMediaObject, APIPlaceObject, APIPollObject, APITweetObject, APIUserObject } from '../payloads/index';

/**
 * Returns a variety of information about a single Tweet specified by the requested ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export interface GetSingleTweetByIdQuery {
  expansions?: Array<TweetExpansion>;

  'media.fields'?: Array<MediaField>;

  'place.fields'?: Array<PlaceField>;

  'poll.fields'?: Array<PollField>;

  'tweet.fields'?: Array<TweetField>;

  'user.fields'?: Array<UserField>;
}

export type TweetExpansion =
  | 'attachments.poll_ids'
  | 'attachments.media_keys'
  | 'author_id'
  | 'entities.mentions.username'
  | 'geo.place_id'
  | 'in_reply_to_user_id'
  | 'referenced_tweets.id'
  | 'referenced_tweets.id.author_id';

export type MediaField = keyof APIMediaObject;

export type PlaceField = keyof APIPlaceObject;

export type PollField = keyof APIPollObject;

export type TweetField = keyof APITweetObject;

export type UserField = keyof APIUserObject;

export interface GetTweetByIdResponse {
  data: APITweetObject;
  includes?: TweetIncludes;
}

export interface TweetIncludes {
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
  includes?: TweetIncludes;
}
