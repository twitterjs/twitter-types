/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/poll
 */
export interface APIPoll {
  /**
   * The unique identifier of the poll
   */
  id: string;

  /**
   * Contains objects describing each choice in the poll
   */
  options: Array<APIPollOption>;

  /**
   * The total duration of the poll
   */
  duration_minutes?: number;

  /**
   * The `ISO 8601` end date and time for the poll
   */
  end_datetime?: Date;

  /**
   * Indicates if this poll is still active and can receive votes, or if the voting is now closed
   */
  voting_status?: APIPollVotingStatus;
}

export interface APIPollOption {
  position: number;
  label: string;
  votes: number;
}

export type APIPollVotingStatus = 'open' | 'closed';
