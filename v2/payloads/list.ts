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

	/**
	 * Creation time of this list
	 */
	created_at?: string;

	/**
	 * Number of users who follow this list
	 */
	follower_count?: number;

	/**
	 * Number of users who are a member of this list
	 */
	member_count?: number;

	/**
	 * The user id of the owner of the list
	 */
	owner_id?: Snowflake;
}
