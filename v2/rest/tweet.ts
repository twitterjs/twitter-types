import type { GetSingleUserByIdQuery, GetSingleUserByIdResponse } from './user';
import type { APIMediaField, APIPlaceField, APIPollField, APITweetField, APIUserField } from './misc';
import type {
  APIMediaObject,
  APIPlaceObject,
  APIPollObject,
  APITweetObject,
  APIUserObject,
  Snowflake,
} from '../payloads/index';

export type APITweetExpansion =
  | 'attachments.poll_ids'
  | 'attachments.media_keys'
  | 'author_id'
  | 'entities.mentions.username'
  | 'geo.place_id'
  | 'in_reply_to_user_id'
  | 'referenced_tweets.id'
  | 'referenced_tweets.id.author_id';

export interface APITweetIncludes {
  tweets?: Array<APITweetObject>;
  users?: Array<APIUserObject>;
  places?: Array<APIPlaceObject>;
  media?: Array<APIMediaObject>;
  polls?: Array<APIPollObject>;
}

/**
 * The query for fetching a single tweet by ID
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

/**
 * The response for the request of fetching a single tweet by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export interface GetSingleTweetByIdResponse {
  data: APITweetObject;
  includes?: APITweetIncludes;
}

/**
 * The query for fetching multiple tweets by IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export interface GetMultipleTweetsByIdsQuery extends GetSingleTweetByIdQuery {
  /**
   * A comma separated list of Tweet IDs. Up to `100` are allowed in a single request
   */
  ids: Array<Snowflake>;
}

/**
 * The response for the request of fetching multiple tweets by IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export interface GetMultipleTweetsByIdsResponse {
  data: Array<APITweetObject>;
  includes?: APITweetIncludes;
}

/**
 * The body for liking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface PostTweetLikeJSONBody {
  /**
   * The ID of the tweet to like
   */
  tweet_id: Snowflake;
}

/**
 * The response for liking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface PostTweetLikeResponse {
  data: PostTweetLikeResponseData;
}

export interface PostTweetLikeResponseData {
  /**
   * Indicates whether the authorized user liked the specified tweet as a result of the request
   */
  liked: boolean;
}

/**
 * The response of unliking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id
 */
export interface DeleteTweetUnlikeResponse {
  data: DeleteTweetUnlikeResponseData;
}

export interface DeleteTweetUnlikeResponseData {
  /**
   * Indicates whether the authorized user unliked the specified tweet as a result of the request
   */
  liked: boolean;
}

/**
 * The body for hiding or unhiding a tweet reply
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export interface PutTweetReplyHideUnhideJSONBody {
  /**
   * Indicates the action to perform. Specify `true` to hide and `false` to unhide the specified tweet reply.
   * Trying to hide a tweet that's already hidden (or unhide a tweet that is not hidden)
   * will result in a successful call
   */
  hidden: boolean;
}

/**
 * The response of hiding or unhiding a tweet reply
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden#tab1
 */
export interface PutTweetReplyHideUnhideResponse {
  data: PutTweetReplyHideUnhideResponseData;
}

export interface PutTweetReplyHideUnhideResponseData {
  /**
   * Indicates if the tweet is hidden or unhidden
   */
  hidden: boolean;
}

export interface GetSampledTweetStreamQuery {
  backfill_minutes?: number;
  expansions?: Array<APITweetExpansion>;
  'media.fields'?: Array<APIMediaField>;
  'place.fields'?: Array<APIPlaceField>;
  'poll.fields'?: Array<APIPollField>;
  'tweet.fields'?: Array<APITweetField>;
  'user.fields'?: Array<APIUserField>;
}

/**
 * The body for retweeting a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface PostRetweetJSONBody {
  /**
   * The ID of the tweet to retweet
   */
  tweet_id: Snowflake;
}

/**
 * The response of retweeting a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface PostRetweetResponse {
  data: PostRetweetResponseData;
}

export interface PostRetweetResponseData {
  retweeted: boolean;
}

/**
 * The response for deleting a retweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id
 */
export type DeleteRetweetResponse = PostRetweetResponse;

/**
 * The query for requesting users who retweeted a specific tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export type GetRetweetedByQuery = GetSingleUserByIdQuery;

/**
 * The response of requesting users who retweeted a specific tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export interface GetRetweetedByResponse extends GetSingleUserByIdResponse {
  meta: GetRetweetedByResponseMeta;
}

export interface GetRetweetedByResponseMeta {
  /**
   * The number of user results returned in the response
   */
  result_count: number;
}
