import type { APITweet, APIUser } from '../../payloads';
import type { APITweetFieldsParameterType } from '../tweets';

export * from './Blocks';
export * from './Follows';
export * from './Mutes';
export * from './UsersLookup';

export type APIUserExpansionsParameterType = 'pinned_tweet_id';

export const APIUserExpansionsParameters: Array<APIUserExpansionsParameterType> = ['pinned_tweet_id'];

export type APIUserFieldsParameterType = keyof APIUser;

export const APIUserFieldsParameters: Array<APIUserFieldsParameterType> = [
	'created_at',
	'description',
	'entities',
	'id',
	'location',
	'name',
	'pinned_tweet_id',
	'profile_image_url',
	'protected',
	'public_metrics',
	'url',
	'username',
	'verified',
	'withheld',
];

export interface APIUserExpansions {
	tweets?: Array<APITweet>;
}

export interface SingleUserLookupQuery {
	expansions?: Array<APIUserExpansionsParameterType>;
	'tweet.fields'?: Array<APITweetFieldsParameterType>;
	'user.fields'?: Array<APIUserFieldsParameterType>;
}

export interface SingleUserLookupResponse {
	data: APIUser;
	includes?: APIUserExpansions;
}

export type MultipleUsersLookupQuery = SingleUserLookupQuery;

export interface MultipleUsersLookupResponse {
	data: Array<APIUser>;
	includes?: APIUserExpansions;
}
