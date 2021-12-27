/**
 * The body for hiding/unhiding a reply to a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export interface PUT_2_tweets_id_hidden_JSONBody {
  hidden: boolean;
}

/**
 * The response of hiding/unhiding a reply to a tweet
 *
 * https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export interface PUT_2_tweets_id_hidden_Response {
  data: {
    hidden: boolean;
  };
}
