import type { Snowflake } from '../../payloads';

/**
 * The body for hiding/unhiding a reply to a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export interface PUTTweetsIdHiddenJSONBody {
  hidden: boolean;
}

/**
 * The response of hiding/unhiding a reply to a tweet
 *
 * @see https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export interface PUTTweetsIdHiddenResponse {
  data: {
    hidden: boolean;
  };
}

/**
 * Generates route for hiding/unhiding a reply to a tweet:
 * - PUT `/tweets/:id/hidden`
 * @param tweetId The tweet id to hide
 *
 * @link https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export function PUTTweetsIdHiddenRoute(tweetId: Snowflake) {
  return `/tweets/${tweetId}/hidden` as const;
}
