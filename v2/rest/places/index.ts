import type { APIPlace } from '../../payloads';

export type APIPlaceFieldsParameterType = keyof APIPlace;

export const APIPlaceFieldsParameters: Array<APIPlaceFieldsParameterType> = [
	'contained_within',
	'country',
	'country_code',
	'full_name',
	'geo',
	'id',
	'name',
	'place_type',
];
