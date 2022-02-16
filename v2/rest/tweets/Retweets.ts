import type { MultipleUsersLookupQuery, MultipleUsersLookupResponse } from '../users';

/**
 * The query for fetching users who retweeted a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export interface GETTweetsIdRetweetedByQuery extends MultipleUsersLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching users who retweeted a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export interface GETTweetsIdRetweetedByResponse extends MultipleUsersLookupResponse {
	meta: {
		result_count: number;
		previous_token?: string;
		next_token?: string;
	};
}

/**
 * Generates route for fetching users who retweeted a tweet:
 * - GET `/tweets/:id/retweeted_by`
 * @param tweetId The tweet id whose retweeting users are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export function GETTweetsIdRetweetedByRoute(tweetId: string) {
	return `/tweets/${tweetId}/retweeted_by` as const;
}

/**
 * The body for retweeting a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface POSTUsersIdRetweetsJSONBody {
	tweet_id: string;
}

/**
 * The response of retweeting a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export interface POSTUsersIdRetweetsResponse {
	data: {
		retweeted: boolean;
	};
}

/**
 * Generates route for retweeting a tweet:
 * - POST `/users/:id/retweets`
 * @param userId The user id to retweet on behalf of
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export function POSTUsersIdRetweetsRoute(userId: string) {
	return `/users/${userId}/retweets` as const;
}

/* eslint-disable max-len */
/**
 * The response of removing a retweet of a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id
 */
export interface DELETEUsersIdRetweetsSourceTweetIdResponse {
	data: {
		retweeted: boolean;
	};
}

/**
 * Generates route for removing a retweet of a tweet:
 * - DELETE `/users/:id/retweets/:source_tweet_id`
 * @param userId The user id to remove the retweet on behalf of
 * @param tweetId The tweet id whose retweet is to be removed
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id
 */
export function DELETEUsersIdRetweetsSourceTweetIdRoute(userId: string, tweetId: string) {
	return `/users/${userId}/retweets/${tweetId}` as const;
}
/* eslint-enable max-len */
