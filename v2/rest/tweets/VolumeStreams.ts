import type { SingleTweetLookupQuery, SingleTweetLookupResponse } from '.';

/**
 * The query to connect with the sampled-tweet-stream
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream
 */
export interface GET_2_tweets_sample_stream_Query extends SingleTweetLookupQuery {
  backfill_minutes?: number;
}

/**
 * The response of the sampled-tweet-stream
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream
 */
export type GET_2_tweets_sample_stream_Response = SingleTweetLookupResponse;
