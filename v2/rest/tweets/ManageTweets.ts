import type { APITweetReplySettings, Snowflake } from '../../payloads';

/**
 * The body for creating a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
 */
export interface POST_2_tweets_JSONBody {
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
 * https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
 */
export interface POST_2_tweets_Response {
  data: {
    id: Snowflake;
    text: string;
  };
}

/**
 * The response of deleting a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id
 */
export interface DELETE_2_tweets_id_Response {
  data: {
    deleted: boolean;
  };
}
