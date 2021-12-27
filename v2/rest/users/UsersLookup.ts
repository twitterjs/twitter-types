import type { APITweet, APIUser, TweetFieldsParameter, UserFieldsParameter } from '../..';

export type APIUserExpansionsParameter = 'pinned_tweet_id';

export interface APIUserExpansions {
  tweets?: Array<APITweet>;
}

export interface SingleUserLookupQuery {
  expansions?: Array<APIUserExpansionsParameter>;
  'tweet.fields'?: Array<TweetFieldsParameter>;
  'user.fields'?: Array<UserFieldsParameter>;
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
