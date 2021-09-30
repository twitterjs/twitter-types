import type { Snowflake } from './misc';

export interface APIList {
  /**
   * The id of the list
   */
  id: Snowflake;

  /**
   * The name of the created list
   */
  name: string;
}
