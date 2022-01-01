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
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules#
 */
export interface POST_2_tweets_search_stream_rules_Query {
  dry_run?: boolean;
}

/**
 * The body for adding or deleting filtered-tweet-stream rules
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules#
 */
export type POST_2_tweets_search_stream_rules_JSONBody = MergeExclusive<
  AddFilteredTweetStreamRulesJSONBody,
  RemoveFilteredTweetStreamRulesJSONBody
>;

// TODO: verify this itnerface
/**
 * The response of adding or deleting filtered-tweet-stream rules
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules#
 */
export type POST_2_tweets_search_stream_rules_Response = MergeExclusive<
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
 * The query for fetching currently active filtered-tweet-stream rules
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules
 */
export interface GET_2_tweets_search_stream_rules_Query {
  ids?: Array<Snowflake>;
}

// TODO: verify this itnerface
/**
 * The response of fetching currently active filtered-tweet-stream rules
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules
 */
export interface GET_2_tweets_search_stream_rules_Response {
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
 * The query to connect with the filtered-tweet-stream
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream
 */
export interface GET_2_tweets_search_stream_Query extends SingleTweetLookupQuery {
  backfill_minutes?: number;
}

/**
 * The response of the filtered-tweet-stream
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream
 */
export interface GET_2_tweets_search_stream_Response extends SingleTweetLookupResponse {
  matching_rules: Array<{ id: Snowflake; tag?: string }>;
}
