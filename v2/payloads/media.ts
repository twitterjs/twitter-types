/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
 */
export interface APIMediaObject {
  /**
   * The unique identifier of the expanded media content
   */
  media_key: string;

  /**
   * The type of the content
   */
  type: APIMediaType;

  /**
   * The duration of the content in milliseconds if it is a video
   */
  duration_ms?: number;

  /**
   * The height of the content in pixels
   */
  height?: number;

  /**
   * Non-public engagement metrics for the media content at the time of the request.
   * Requires user context authentication
   */
  non_public_metrics?: any; // TODO

  /**
   * Engagement metrics for the media content, tracked in an organic context, at the time of the request.
   * Requires user context authentication
   */
  organic_metrics?: any; // TODO

  /**
   * The URL to the static placeholder preview of the content
   */
  preview_image_url?: string;

  /**
   * Engagement metrics for the media content, tracked in a promoted context, at the time of the request.
   * Requires user context authentication
   */
  promoted_metrics?: any; // TODO

  /**
   * Public engagement metrics for the media content at the time of the request
   */
  public_metrics?: any; // TODO

  /**
   * The width of the content in pixels
   */
  width?: number;
}

export type APIMediaType = 'animated_gif' | 'photo' | 'video';
