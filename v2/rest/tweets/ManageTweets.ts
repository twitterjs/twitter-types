import type { APITweetReplySettings, Snowflake } from '../../payloads';

/**
 * The body for creating a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
 */
export interface POSTTweetsJSONBody {
  direct_message_deep_link?: string;
  for_super_followers_only?: boolean;
  geo?: {
    place_id?: string;
  };
  media?: {
    media_ids?: Array<Snowflake>;
    tagged_user_ids?: Array<Snowflake>;
  };
  poll?: {
    duration_minutes?: number;
    options?: Array<string>;
  };
  quote_tweet_id?: Snowflake;
  reply?: {
    exclude_reply_user_ids?: Array<Snowflake>;
    in_reply_to_tweet_id?: string;
  };
  reply_settings?: APITweetReplySettings;
  text?: string;
}

/**
 * The response of creating a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
 */
export interface POSTTweetsResponse {
  data: {
    id: Snowflake;
    text: string;
  };
}

/**
 * Generates route for creating a tweet:
 * - POST `/tweets`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
 */
export function POSTTweetsRoute() {
  return `/tweets` as const;
}

/**
 * The response of deleting a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id
 */
export interface DELETETweetsIdResponse {
  data: {
    deleted: boolean;
  };
}

/**
 * Generates route for deleting a tweet:
 * - DELETE `/tweets/:id`
 * @param tweetId The tweet id to delete
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id
 */
export function DELETETweetsIdRoute(tweetId: Snowflake) {
  return `/tweets/${tweetId}` as const;
}
