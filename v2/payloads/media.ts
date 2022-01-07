/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
 */
export interface APIMedia {
  /**
   * The unique identifier of the expanded media content
   */
  media_key: string;

  /**
   * The type of the media content
   */
  type: APIMediaType;

  /**
   * The duration of the media content in milliseconds if it is of type `video`
   */
  duration_ms?: number;

  /**
   * The height of the media content in pixels
   */
  height?: number;

  /**
   * Non-public engagement metrics for the media content at the time of the request.
   * Requires user context authentication. This field is only present for type `video`
   */
  non_public_metrics?: APIMediaNonPublicMetrics;

  /**
   * Engagement metrics for the media content, tracked in an organic context, at the time of the request.
   * Requires user context authentication. This field is only present for type `video`
   */
  organic_metrics?: APIMediaOrganicMetrics;

  /**
   * The URL to the static placeholder preview of the media content
   */
  preview_image_url?: string;

  /**
   * Engagement metrics for the media content, tracked in a promoted context, at the time of the request.
   * Requires user context authentication. This field is only present for type `video`
   */
  promoted_metrics?: APIMediaPromotedMetrics;

  /**
   * Public engagement metrics for the media content at the time of the request.
   * This field is only present for type `video`
   */
  public_metrics?: APIMediaPublicMetrics;

  /**
   * The url of the media content if it is of type `photo`
   */
  url?: string;

  /**
   * The width of the media content in pixels
   */
  width?: number;

  /**
   * The description of an image
   */
  alt_text?: string;
}

export type APIMediaType = 'animated_gif' | 'photo' | 'video';

/**
 * Non public metrics for a media of type `video`
 */
export interface APIMediaNonPublicMetrics {
  /**
   * Number of users who made it through 0% of the video
   */
  playback_0_count: number;

  /**
   * Number of users who made it through 25% of the video
   */
  playback_25_count: number;

  /**
   * Number of users who made it through 50% of the video
   */
  playback_50_count: number;

  /**
   * Number of users who made it through 75% of the video
   */
  playback_75_count: number;

  /**
   * Number of users who made it through 100% of the video
   */
  playback_100_count: number;
}

/**
 * Organic metrics for media of type `video`
 */
export type APIMediaOrganicMetrics = APIMediaNonPublicMetrics & APIMediaPublicMetrics;

/**
 * Promoted metrics for media of type `video`
 */
export type APIMediaPromotedMetrics = APIMediaNonPublicMetrics & APIMediaPublicMetrics;

/**
 * Public metrics for a media of type `video`
 */
export interface APIMediaPublicMetrics {
  /**
   * Number of times this video has been viewed
   */
  view_count: number;
}
