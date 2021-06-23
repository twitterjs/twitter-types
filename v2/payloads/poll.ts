/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/poll
 */
export interface APIPollObject {
  /**
   * The unique identifier of the poll
   */
  id: string;

  /**
   * Contains objects describing each choice in the poll
   */
  options: Array<any>; // TODO

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
  voting_status?: string; // TODO this can be narrowed down to open/closed??
}
