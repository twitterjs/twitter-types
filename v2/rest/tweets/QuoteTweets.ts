import type { MultipleTweetsLookupQuery, MultipleTweetsLookupResponse } from './index';

/**
 * The query for fetching quote tweets of a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets
 */
export interface GETTweetsIdQuoteTweetsQuery extends MultipleTweetsLookupQuery {
	max_results?: number;
	pagination_token?: string;
}

/**
 * The response of fetching quote tweets of a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets
 */
export interface GETTweetsIdQuoteTweetsResponse extends MultipleTweetsLookupResponse {
	meta: {
		result_count: number;
		next_token?: string;
	};
}

/**
 * Generates route for fetching quote tweets of a tweet
 * - GET `/tweets/:id/quote_tweets`
 * @param tweetId The tweet id whose quote tweets are to be fetched
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets
 */
export function GETTweetsIdQuoteTweetsRoute(tweetId: string) {
	return `/tweets/${tweetId}/quote_tweets` as const;
}
