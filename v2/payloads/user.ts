import type { Snowflake } from './misc';

/**
 * The Twitter User object
 *
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
 */
export interface APIUser {
  /**
   * The unique identifier of the user
   */
  id: Snowflake;

  /**
   * The name of the user, as they’ve defined it on their profile. Not necessarily a person’s name.
   * Typically capped at `50` characters, but subject to change
   */
  name: string;

  /**
   * The Twitter screen name, handle, or alias that this user identifies themselves with. Usernamesare unique but
   * subject to change. Typically a maximum of `15` characters long, but some historical accounts may exist with longer
   * names
   */
  username: string;

  /**
   * The UTC datetime that the user account was created on Twitter
   */
  created_at?: Date;

  /**
   * The text of this user's profile description (also known as bio), if the user provided one
   */
  description?: string;

  /**
   * Contains details about text that has a special meaning in the user's description
   */
  entities?: APIUserEntities;

  /**
   * The location specified in the user's profile, if the user provided one. As this is a freeform value,
   * it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with
   * location queries
   */
  location?: string;

  /**
   * The unique identifier of this user's pinned Tweet
   */
  pinned_tweet_id?: Snowflake;

  /**
   * The URL to the profile image for this user, as shown on the user's profile
   */
  profile_image_url?: string;

  /**
   * Indicates if this user has chosen to protect their Tweets (in other words, if this user's Tweets are private)
   */
  protected?: boolean;

  /**
   * Contains details about activity for this user
   */
  public_metrics?: APIUserPublicMetrics;

  /**
   * The URL specified in the user's profile, if present
   */
  url?: string;

  /**
   * Indicates if this user is a verified Twitter User
   */
  verified?: boolean;

  /**
   * Contains withholding details for withheld content, if applicable
   */
  withheld?: APIUserWithheld;
}

export interface APIUserBaseEntity {
  start: number;
  end: number;
}

export interface APIUserCashtagEntity extends APIUserBaseEntity {
  tag: string;
}

export interface APIUserEntities {
  url?: APIUserEntitiesURL;
  description?: APIUserEntitiesDescription;
}

export interface APIUserEntitiesDescription {
  urls?: Array<APIUserURLEntity>;
  hashtags?: Array<APIUserHashtagEntity>;
  mentions?: Array<APIUserMentionEntity>;
  cashtags?: Array<APIUserCashtagEntity>;
}

export interface APIUserEntitiesURL {
  urls: Array<APIUserURLEntity>;
}

export interface APIUserHashtagEntity extends APIUserBaseEntity {
  tag: string;
}

export interface APIUserMentionEntity extends APIUserBaseEntity {
  username: string;
}

export interface APIUserPublicMetrics {
  followers_count: number;
  following_count: number;
  tweet_count: number;
  listed_count: number;
}

export interface APIUserURLEntity extends APIUserBaseEntity {
  url: string;
  expanded_url: string;
  display_url: string;
}

/**
 * Indicates withholding details for
 * [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country)
 */
export interface APIUserWithheld {
  /**
   * Provides a list of countries where this content is not available
   */
  country_codes: Array<string>;

  /**
   * Indicates that the content being withheld is a `user`
   */
  scope?: string;
}
