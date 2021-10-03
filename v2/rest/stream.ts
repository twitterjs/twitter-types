import type { Snowflake, APIFilteredTweetStreamRule } from '../payloads';
import type { SingleTweetLookupQuery, SingleTweetLookupResponse } from './tweet';

/**
 * The **optional** query for adding or deleting filtered streaming rules
 */
export interface PostFilteredTweetStreamRulesQuery {
  /**
   * Set to `true` to test the syntax of your rule without submitting it.
   * This is useful if you want to check the syntax of a rule before removing
   * one or more of your existing rules
   */
  dry_run?: boolean;
}

export interface PostAddFilteredTweetStreamRulesJSONBody {
  add: Array<{
    value: string;
    tag?: string;
  }>;
}

export interface PostRemoveFilteredTweetStreamRulesByIdsJSONBody {
  delete: { ids: Array<Snowflake> };
}

export interface PostRemoveFilteredTweetStreamRulesByValuesJSONBody {
  delete: { values: Array<string> };
}

export interface PostAddFilteredTweetStreamRulesResponseMetadata {
  sent: string;
  summary: {
    created: number;
    not_created: number;
    valid: number;
    invalid: number;
  };
}

export interface PostRemoveFilteredTweetStreamRulesResponseMetadata {
  sent: string;
  summary: {
    deleted: number;
    not_deleted: number;
  };
}

export interface PostAddFilteredTweetStreamRulesResponse {
  data: Array<APIFilteredTweetStreamRule>;
  meta: PostAddFilteredTweetStreamRulesResponseMetadata;
}

export interface PostRemoveFilteredTweetStreamRulesResponse {
  meta: PostRemoveFilteredTweetStreamRulesResponseMetadata;
}

/**
 * The query for fetching filtered tweet stream rules
 */
export interface GetFilteredTweetStreamRulesQuery {
  /**
   * Comma-separated list of rule IDs. If omitted, all rules are returned
   */
  ids?: Array<Snowflake>;
}

/**
 * The response of fetching filtered tweet stream rules
 */
export interface GetFilteredTweetStreamRulesResponse {
  data: Array<APIFilteredTweetStreamRule>;
  meta: {
    sent: string;
  };
}

/**
 * The query for connecting to filtered tweet stream
 */
export interface GetFilteredTweetStreamQuery extends SingleTweetLookupQuery {
  backfill_minutes?: number;
}

/**
 * The individual response in the filtered tweet stream
 */
export interface GetFilteredTweetStreamResponse extends SingleTweetLookupResponse {
  matching_rules: Array<{ id: Snowflake; tag?: string }>;
}

export interface GetSampledTweetStreamQuery extends SingleTweetLookupQuery {
  backfill_minutes?: number;
}

export type GetSampledTweetStreamResponse = SingleTweetLookupResponse;
