import type { APISpace, APIUser, Snowflake } from '../payloads';
import type { SpaceFieldsParameter, UserFieldsParameter } from './misc';

export interface APISpaceExpansions {
  users?: Array<APIUser>;
}

export interface SingleSpaceLookupResponse {
  data: APISpace;
  includes?: APISpaceExpansions;
  errors?: any; // TODO
}

export interface MultiSpaceLookupResponse {
  data: Array<APISpace>;
  includes?: APISpaceExpansions;
  errors?: any; // TODO
}

export interface MultiSpaceLookupWithCountResponse extends MultiSpaceLookupResponse {
  meta: {
    /**
     * The number of space results returned in this response
     */
    result_count: number;
  };
}

export type SpaceExpansionsParameter = 'invited_user_ids' | 'speaker_ids' | 'creator_id' | 'host_ids';

export interface SingleSpaceLookupQuery {
  expansions?: Array<SpaceExpansionsParameter>;
  'space.fields'?: Array<SpaceFieldsParameter>;
  'user.fields'?: Array<UserFieldsParameter>;
}

export type GetSingleSpaceByIdQuery = SingleSpaceLookupQuery;

export type GetSingleSpaceByIdResponse = SingleSpaceLookupResponse;

export interface GetMultipleSpacesByIdsQuery extends SingleSpaceLookupQuery {
  ids: Array<Snowflake>;
}

export type GetMultipleSpacesByIdsResponse = MultiSpaceLookupResponse;

export interface GetMultipleSpacesByCreatorIdsQuery extends SingleSpaceLookupQuery {
  user_ids: Array<Snowflake>;
}

export type GetMultipleSpacesByCreatorIdsResponse = MultiSpaceLookupWithCountResponse;

export interface GetMultipleSpacesBySearchQuery extends SingleSpaceLookupQuery {
  query: string;
  state: string;
  max_results?: number;
}

export type GetMultipleSpacesBySearchResponse = MultiSpaceLookupWithCountResponse;
