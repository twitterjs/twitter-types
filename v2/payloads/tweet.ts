/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet
 */
export interface APITweetObject {
  /**
   * The unique identifier of the requested Tweet
   */
  id: string;

  /**
   * The actual `UTF-8` text of the Tweet
   */
  text: string;

  /**
   * The type of attachments (if any) present in the Tweet
   */
  attachments?: any; // TODO

  /**
   * The unique identifier of the User who posted the Tweet
   */
  author_id?: string;

  /**
   * Contains context annotations for the Tweet
   */
  context_annotations?: Array<any>; // TODO

  /**
   * The ID of the original Tweet of the conversation (which includes direct replies, replies of replies)
   */
  conversation_id?: string;

  /**
   * The `ISO 8601` creation time of the Tweet
   */
  created_at?: Date;

  /**
   * The entities which have been parsed out of the text of the Tweet
   */
  entities?: any; // TODO

  /**
   * The details about the location tagged by the user in the Tweet, if they specified one
   */
  geo?: any; // TODO

  /**
   * If the Tweet is a reply, this field will contain the original Tweet’s author ID.
   * This will not necessarily always be the user directly mentioned in the Tweet
   */
  in_reply_to_user_id?: string;

  /**
   * The language of the Tweet, if detected by Twitter. Returned as a `BCP47` language tag
   */
  lang?: string;

  /**
   * Non-public engagement metrics for the Tweet at the time of the request.
   * Requires user context authentication
   */
  non_public_metrics?: APINonPublicMetrics;

  /**
   * Engagement metrics tracked in an organic context for the Tweet at the time of the request.
   * Requires user context authentication
   */
  organic_metrics?: APIOrganicMetrics;

  /**
   * This field only surfaces when a Tweet contains a link. The meaning of the field doesn’t pertain
   * to the Tweet content itself, but instead it is an indicator that the URL contained in the Tweet
   * may contain content or media identified as sensitive content
   */
  possibly_sensitive?: boolean;

  /**
   * Engagement metrics tracked in a promoted context for the Tweet at the time of the request.
   * Requires user context authentication
   */
  promoted_metrics?: any; // TODO

  /**
   * Public engagement metrics for the Tweet at the time of the request
   */
  public_metrics?: APIPublicMetrics;

  /**
   * A list of Tweets this Tweet refers to. It will also include the related Tweet referenced to by its parent
   */
  referenced_tweets?: Array<any>;

  /**
   * Shows who can reply to the Tweet
   */
  reply_settings?: APIReplySettings;

  /**
   * The name of the app the user Tweeted from
   */
  source?: string;

  /**
   * When present, contains withholding details for withheld content
   *
   * See https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country
   */
  withheld?: any;
}

export interface APINonPublicMetrics {
  impression_count: number;
  url_link_clicks?: number;
  user_profile_clicks: number;
}

export interface APIOrganicMetrics {
  impression_count: number;
  like_count: number;
  reply_count: number;
  retweet_count: number;
  url_link_clicks?: number;
  user_profile_clicks: number;
}

export interface APIPromotedMetrics {
  impression_count: number;
  like_count: number;
  reply_count: number;
  retweet_count: number;
  url_link_clicks?: number;
  user_profile_clicks: number;
}

export interface APIPublicMetrics {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
}

export type APIReplySettings = 'everyone' | 'mentioned_users' | 'followers';
