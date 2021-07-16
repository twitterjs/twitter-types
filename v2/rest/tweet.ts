import type { GetSingleUserByIdQuery, MultipleUsersLookupWithCountResponse } from './user';
import type { APIMedia, APIPlace, APIPoll, APITweet, APIUser, Snowflake } from '../payloads/index';
import type {
  MediaFieldsParameter,
  PlaceFieldsParameter,
  PollFieldsParameter,
  TweetFieldsParameter,
  UserFieldsParameter,
} from './misc';

export interface SingleTweetLookupResponse {
  data: APITweet;
  includes?: APITweetExpansions;
  errors?: any; // TODO
}

export interface APITweetExpansions {
  tweets?: Array<APITweet>;
  users?: Array<APIUser>;
  places?: Array<APIPlace>;
  media?: Array<APIMedia>;
  polls?: Array<APIPoll>;
}

export interface MultiTweetLookupResponse {
  data: Array<APITweet>;
  includes?: APITweetExpansions;
  errors?: any; // TODO
}

export type TweetExpansionsParameter =
  | 'attachments.poll_ids'
  | 'attachments.media_keys'
  | 'author_id'
  | 'entities.mentions.username'
  | 'geo.place_id'
  | 'in_reply_to_user_id'
  | 'referenced_tweets.id'
  | 'referenced_tweets.id.author_id';

export interface SingleTweetLookupQuery {
  expansions?: Array<TweetExpansionsParameter>;
  'media.fields'?: Array<MediaFieldsParameter>;
  'place.fields'?: Array<PlaceFieldsParameter>;
  'poll.fields'?: Array<PollFieldsParameter>;
  'tweet.fields'?: Array<TweetFieldsParameter>;
  'user.fields'?: Array<UserFieldsParameter>;
}

/**
 * The query for fetching a single tweet by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export type GetSingleTweetByIdQuery = SingleTweetLookupQuery;

/**
 * The response for the request of fetching a single tweet by ID
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export type GetSingleTweetByIdResponse = SingleTweetLookupResponse;

/**
 * The query for fetching multiple tweets by IDs
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export interface GetMultipleTweetsByIdsQuery extends SingleTweetLookupQuery {
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
export type GetMultipleTweetsByIdsResponse = MultiTweetLookupResponse;

/**
 * The body for liking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export interface PostTweetsLikeJSONBody {
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
export interface PostTweetsLikeResponse {
  data: {
    /**
     * Indicates whether the authorized user liked the specified tweet as a result of the request
     */
    liked: boolean;
  };

  errors?: any; // TODO
}

/**
 * The response of unliking a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id
 */
export interface DeleteTweetsLikeResponse {
  data: {
    /**
     * Indicates whether the authorized user unliked the specified tweet as a result of the request
     */
    liked: boolean;
  };

  errors?: any; // TODO
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
  data: {
    /**
     * Indicates if the tweet is hidden or unhidden
     */
    hidden: boolean;
  };
}

export interface GetSampledTweetStreamQuery extends SingleTweetLookupQuery {
  backfill_minutes?: number;
}

/**
 * The body for retweeting a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface PostUsersRetweetsJSONBody {
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
export interface PostUsersRetweetsResponse {
  data: {
    retweeted: boolean;
  };
  errors?: any; // TODO
}

/**
 * The response for deleting a retweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id
 */
export type DeleteUsersRetweetsResponse = PostUsersRetweetsResponse;

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
export type GetRetweetedByResponse = MultipleUsersLookupWithCountResponse;
