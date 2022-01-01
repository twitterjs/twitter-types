import type { APIPollFieldsParameterType } from '../polls';
import type { APIUserFieldsParameterType } from '../users';
import type { APIMediaFieldsParameterType } from '../media';
import type { APIPlaceFieldsParameterType } from '../places';
import type { APIMedia, APIPlace, APIPoll, APITweet, APIUser } from '../../payloads';

export * from './FilteredStream';
export * from './HideReplies';
export * from './Likes';
export * from './ManageTweets';
export * from './Retweets';
export * from './SearchTweets';
export * from './Timelines';
export * from './TweetCounts';
export * from './TweetsLookup';
export * from './VolumeStreams';

export type APITweetExpansionsParameterType =
  | 'attachments.poll_ids'
  | 'attachments.media_keys'
  | 'author_id'
  | 'entities.mentions.username'
  | 'geo.place_id'
  | 'in_reply_to_user_id'
  | 'referenced_tweets.id'
  | 'referenced_tweets.id.author_id';

export const APITweetExpansionsParameters: Array<APITweetExpansionsParameterType> = [
  'attachments.media_keys',
  'attachments.poll_ids',
  'author_id',
  'entities.mentions.username',
  'geo.place_id',
  'in_reply_to_user_id',
  'referenced_tweets.id',
  'referenced_tweets.id.author_id',
];

export type APITweetFieldsParameterType = keyof APITweet;

export const APITweetFieldsParameters: Array<APITweetFieldsParameterType> = [
  'attachments',
  'author_id',
  'context_annotations',
  'conversation_id',
  'created_at',
  'created_at',
  'entities',
  'geo',
  'id',
  'in_reply_to_user_id',
  'lang',
  'non_public_metrics',
  'organic_metrics',
  'possibly_sensitive',
  'promoted_metrics',
  'public_metrics',
  'referenced_tweets',
  'reply_settings',
  'source',
  'text',
  'withheld',
];

export interface APITweetExpansions {
  tweets?: Array<APITweet>;
  users?: Array<APIUser>;
  places?: Array<APIPlace>;
  media?: Array<APIMedia>;
  polls?: Array<APIPoll>;
}

export interface SingleTweetLookupQuery {
  expansions?: Array<APITweetExpansionsParameterType>;
  'media.fields'?: Array<APIMediaFieldsParameterType>;
  'place.fields'?: Array<APIPlaceFieldsParameterType>;
  'poll.fields'?: Array<APIPollFieldsParameterType>;
  'tweet.fields'?: Array<APITweetFieldsParameterType>;
  'user.fields'?: Array<APIUserFieldsParameterType>;
}

export interface SingleTweetLookupResponse {
  data: APITweet;
  includes?: APITweetExpansions;
}

export type MultipleTweetsLookupQuery = SingleTweetLookupQuery;

export interface MultipleTweetsLookupResponse {
  data: Array<APITweet>;
  includes?: APITweetExpansions;
}
