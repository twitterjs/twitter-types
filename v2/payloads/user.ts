/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
 */
export interface APIUserObject {
  /**
   * The unique identifier of the user
   */
  id: string;

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
  pinned_tweet_id?: string;

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
  withheld?: any; // TODO
}

export interface APIUserEntities {
  url: APIUserEntitiesURL;
  description: any; // TODO
}

export interface APIUserEntitiesURL {
  urls: Array<{
    start: number;
    end: number;
    url: string;
    expanded_url: string;
    display_url: string;
  }>;
}

export interface APIUserPublicMetrics {
  followers_count: number;
  following_count: number;
  tweet_count: number;
  listed_count: number;
}
