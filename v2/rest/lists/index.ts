import type { APIList, APIUser } from '../../payloads';
import type { APIUserFieldsParameterType } from '../users';

export * from './ListFollows';
export * from './ListMembers';
export * from './ListTweetsLookup';
export * from './ListsLookup';
export * from './ManageLists';
export * from './PinnedLists';

export type APIListExpansionsParameterType = 'owner_id';

export const APIListExpansionsParameters: Array<APIListExpansionsParameterType> = ['owner_id'];

export type APIListFieldsParameterType = keyof APIList;

export const APIListFieldsParameters: Array<APIListFieldsParameterType> = [
	'created_at',
	'description',
	'follower_count',
	'id',
	'member_count',
	'name',
	'owner_id',
	'private',
];

export interface APIListExpansions {
	users?: Array<APIUser>;
}

export interface SingleListLookupQuery {
	expansions?: Array<APIListExpansionsParameterType>;
	'list.fields'?: Array<APIListFieldsParameterType>;
	'user.fields'?: Array<APIUserFieldsParameterType>;
}

export interface SingleListLookupResponse {
	data: APIList;
	includes?: APIListExpansions;
}

export type MultipleListsLookupQuery = SingleListLookupQuery;

export interface MultipleListsLookupResponse {
	data: Array<APIList>;
	includes?: APIListExpansions;
}
