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

  /**
   * The description of the list
   */
  description?: string;

  /**
   * Whether the list is private
   */
  private?: boolean;
}
