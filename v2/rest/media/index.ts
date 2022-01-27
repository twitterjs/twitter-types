import type { APIMedia } from '../../payloads';

export type APIMediaFieldsParameterType = keyof APIMedia;

export const APIMediaFieldsParameters: Array<APIMediaFieldsParameterType> = [
	'alt_text',
	'duration_ms',
	'height',
	'media_key',
	'non_public_metrics',
	'organic_metrics',
	'preview_image_url',
	'promoted_metrics',
	'public_metrics',
	'type',
	'url',
	'width',
];
