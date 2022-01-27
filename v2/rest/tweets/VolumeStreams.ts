import type { SingleTweetLookupQuery, SingleTweetLookupResponse } from './index';

/**
 * The query to connect with the sampled-tweet-stream
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream
 */
export interface GETTweetsSampleStreamQuery extends SingleTweetLookupQuery {
	backfill_minutes?: number;
}

/**
 * The response of the sampled-tweet-stream
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream
 */
export type GETTweetsSampleStreamResponse = SingleTweetLookupResponse;

/**
 * Generates route to connect with the sampled-tweet-stream:
 * - GET `/tweets/sample/stream`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream
 */
export function GETTweetsSampleStreamRoute() {
	return `/tweets/sample/stream` as const;
}
