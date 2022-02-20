import type { APISpace, APIUser } from '../../payloads';
import type { APIUserFieldsParameterType } from '../users';

export * from './SearchSpaces';
export * from './SpacesLookup';

export type APISpaceExpansionsParameterType = 'invited_user_ids' | 'speaker_ids' | 'creator_id' | 'host_ids';

export const APISpaceExpansionsParameters: Array<APISpaceExpansionsParameterType> = [
	'creator_id',
	'host_ids',
	'invited_user_ids',
	'speaker_ids',
];

export type APISpaceFieldsParameterType = keyof APISpace;

export const APISpaceFieldsParameters: Array<APISpaceFieldsParameterType> = [
	'created_at',
	'creator_id',
	'ended_at',
	'host_ids',
	'id',
	'invited_user_ids',
	'is_ticketed',
	'lang',
	'participant_count',
	'scheduled_start',
	'speaker_ids',
	'started_at',
	'state',
	'title',
	'topic_ids',
	'updated_at',
	'subscriber_count',
];

export interface APISpaceExpansions {
	users?: Array<APIUser>;
}

export interface SingleSpaceLookupQuery {
	expansions?: Array<APISpaceExpansionsParameterType>;
	'space.fields'?: Array<APISpaceFieldsParameterType>;
	'topic.fields'?: 'id' | 'name' | 'description';
	'user.fields'?: Array<APIUserFieldsParameterType>;
}

export interface SingleSpaceLookupResponse {
	data: APISpace;
	includes?: APISpaceExpansions;
}

export type MultipleSpacesLookupQuery = SingleSpaceLookupQuery;

export interface MultipleSpacesLookupResponse {
	data: Array<APISpace>;
	includes?: APISpaceExpansions;
}
