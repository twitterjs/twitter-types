/* eslint-disable max-len */
import type { MergeExclusive } from '../misc';
import type { Snowflake } from '../../payloads';
import type { SingleTweetLookupQuery, SingleTweetLookupResponse } from './index';

export interface AddFilteredTweetStreamRulesJSONBody {
  add: Array<{
    value: string;
    tag?: string;
  }>;
}

export interface RemoveFilteredTweetStreamRulesJSONBody {
  delete: MergeExclusive<{ ids: Array<Snowflake> }, { values: Array<string> }>;
}

export interface AddFilteredTweetStreamRulesResponseMeta {
  sent: string;
  summary: {
    created: number;
    not_created: number;
    valid: number;
    invalid: number;
  };
}

export interface RemoveFilteredTweetStreamRulesResponseMeta {
  sent: string;
  summary: {
    deleted: number;
    not_deleted: number;
  };
}

/**
 * The query for adding or deleting filtered-tweet-stream rules
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules
 */
export interface POSTTweetsSearchStreamRulesQuery {
  dry_run?: boolean;
}

/**
 * The body for adding or deleting filtered-tweet-stream rules
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules
 */
export type POSTTweetsSearchStreamRulesJSONBody = MergeExclusive<
  AddFilteredTweetStreamRulesJSONBody,
  RemoveFilteredTweetStreamRulesJSONBody
>;

// TODO: verify this itnerface
/**
 * The response of adding or deleting filtered-tweet-stream rules
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules
 */
export type POSTTweetsSearchStreamRulesResponse = MergeExclusive<
  {
    data: Array<{
      id: Snowflake;
      value: string;
      tag?: string;
    }>;
    meta: AddFilteredTweetStreamRulesResponseMeta;
  },
  {
    meta: RemoveFilteredTweetStreamRulesResponseMeta;
  }
>;

/**
 * Generates link for adding or deleting filtered-tweet-stream rules:
 * - POST `/tweets/search/stream/rules`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules
 */
export function POSTTweetsSearchStreamRulesRoute() {
  return `/tweets/search/stream/rules` as const;
}

/**
 * The query for fetching currently active filtered-tweet-stream rules
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules
 */
export interface GETTweetsSearchStreamRulesQuery {
  ids?: Array<Snowflake>;
}

// TODO: verify this interface
/**
 * The response of fetching currently active filtered-tweet-stream rules
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules
 */
export interface GETTweetsSearchStreamRulesResponse {
  data: Array<{
    id: Snowflake;
    value: string;
    tag?: string;
  }>;
  meta: {
    sent: string;
  };
}

/**
 * Generates route for fetching currently active filtered-tweet-stream rules:
 * - GET `/tweets/search/stream/rules`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules
 */
export function GETTweetsSearchStreamRulesRoute() {
  return `/tweets/search/stream/rules` as const;
}

/**
 * The query to connect with the filtered-tweet-stream
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream
 */
export interface GETTweetsSearchStreamQuery extends SingleTweetLookupQuery {
  backfill_minutes?: number;
}

/**
 * The response of the filtered-tweet-stream
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream
 */
export interface GETTweetsSearchStreamResponse extends SingleTweetLookupResponse {
  matching_rules: Array<{ id: Snowflake; tag?: string }>;
}

/**
 * Generates route to connect with the filtered-tweet-stream:
 * - GET `/tweets/search/stream`
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream
 */
export function GETTweetsSearchStreamRoute() {
  return `/tweets/search/stream` as const;
}
