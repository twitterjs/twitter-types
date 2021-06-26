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
  attachments?: APITweetAttachments;

  /**
   * The unique identifier of the User who posted the Tweet
   */
  author_id?: string;

  /**
   * Contains context annotations for the Tweet
   */
  context_annotations?: Array<APITweetContextAnnotation>;

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
  entities?: APITweetEntities;

  /**
   * The details about the location tagged by the user in the Tweet, if they specified one
   */
  geo?: APITweetGeo;

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
  non_public_metrics?: APITweetNonPublicMetrics;

  /**
   * Engagement metrics tracked in an organic context for the Tweet at the time of the request.
   * Requires user context authentication
   */
  organic_metrics?: APITweetOrganicMetrics;

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
  promoted_metrics?: APITweetPromotedMetrics;

  /**
   * Public engagement metrics for the Tweet at the time of the request
   */
  public_metrics?: APITweetPublicMetrics;

  /**
   * A list of Tweets this Tweet refers to. It will also include the related Tweet referenced to by its parent
   */
  referenced_tweets?: Array<APITweetReferencedTweet>;

  /**
   * Shows who can reply to the Tweet
   */
  reply_settings?: APITweetReplySettings;

  /**
   * The name of the app the user Tweeted from
   */
  source?: string;

  /**
   * When present, contains withholding details for withheld content
   *
   * See https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country
   */
  withheld?: any; // TODO
}

export interface APITweetAnnotationEntity {
  start: number;
  end: number;
  probability: number;
  type: string;
  normalized_text: string;
}

export interface APITweetAttachments {
  media_keys: Array<string>;
  poll_ids: Array<string>;
}

export interface APITweetCashtagEntity {
  start: number;
  end: number;
  tag: string;
}

export interface APITweetContextAnnotation {
  domain: APITweetContextAnnotationDomain;
  entity: APITweetContextAnnotationEntity;
}

export interface APITweetContextAnnotationDomain {
  id: string;
  name: string;
  description: string;
}

export interface APITweetContextAnnotationEntity {
  id: string;
  name: string;
  description: string;
}

export interface APITweetEntities {
  annotations?: Array<APITweetAnnotationEntity>;
  cashtags?: Array<APITweetCashtagEntity>;
  hashtags?: Array<APITweetHashtagEntity>;
  mentions?: Array<APITweetMentionEntity>;
  urls?: Array<APITweetURLEntity>;
}

export interface APITweetGeo {
  coordinates?: APITweetGeoCoordinates;
  place_id: string;
}

export interface APITweetGeoCoordinates {
  type: 'Point';
  coordinates: [number, number] | null;
}

export interface APITweetHashtagEntity {
  start: number;
  end: number;
  tag: string;
}

export interface APITweetMentionEntity {
  start: number;
  end: number;
  username: string;
  id: string;
}

export interface APITweetNonPublicMetrics {
  impression_count: number;
  url_link_clicks?: number;
  user_profile_clicks: number;
}

export interface APITweetOrganicMetrics {
  impression_count: number;
  like_count: number;
  reply_count: number;
  retweet_count: number;
  url_link_clicks?: number;
  user_profile_clicks: number;
}

export interface APITweetPromotedMetrics {
  impression_count: number;
  like_count: number;
  reply_count: number;
  retweet_count: number;
  url_link_clicks?: number;
  user_profile_clicks: number;
}

export interface APITweetPublicMetrics {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
}

export type APITweetReplySettings = 'everyone' | 'mentioned_users' | 'followers';

export interface APITweetReferencedTweet {
  type: APITweetReferencedTweetType;
  id: string;
}

export type APITweetReferencedTweetType = 'retweeted' | 'quoted' | 'replied_to';

export interface APITweetURLEntity {
  start: number;
  end: number;
  url: string;
  expanded_url: string;
  display_url: string;
  status: string;
  title: string;
  description: string;
  unwound_url: string;
}
