import type { APIPoll } from '../../payloads';

export type APIPollFieldsParameterType = keyof APIPoll;

export const APIPollFieldsParameters: Array<APIPollFieldsParameterType> = [
  'duration_minutes',
  'end_datetime',
  'id',
  'options',
  'voting_status',
];
