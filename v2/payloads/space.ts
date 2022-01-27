import type { Snowflake } from './misc';

export interface APISpace {
	/**
	 * The unique identifier of the requested Space
	 */
	id: Snowflake;

	/**
	 * Indicates if the Space has started or will start in the future, or if it has ended
	 */
	state: string;

	/**
	 * Creation time of this Space
	 */
	created_at?: string;

	ended_at?: string;

	/**
	 * The unique identifier of the Users who are hosting this Space
	 */
	host_ids?: Array<Snowflake>;

	/**
	 * Language of the Space, if detected by Twitter. Returned as a `BCP47` language tag
	 */
	lang?: string;

	/**
	 * Indicates whether this is a ticketed Space
	 */
	is_ticketed?: boolean;

	/**
	 * The list of user IDs that were invited to join as speakers.
	 * Usually, users in this list are invited to speak via the Invite user option
	 */
	invited_user_ids?: Array<Snowflake>;

	/**
	 * The current number of users in the Space, including Hosts and Speakers
	 */
	participant_count?: number;

	/**
	 * Indicates the start time of a scheduled Space, as set by the creator of the Space.
	 * This field is returned only if the Space has been scheduled; in other words,
	 * if the field is returned, it means the Space is a scheduled Space
	 */
	scheduled_start?: string;

	/**
	 * The list of users who were speaking at any point during the Space.
	 * This list contains all the users in `invited_user_ids` in addition to
	 * any user who requested to speak and was allowed via the Add speaker option
	 */
	speaker_ids?: Array<Snowflake>;

	/**
	 * Indicates the actual start time of a Space
	 */
	started_at?: string;

	/**
	 * The title of the Space as specified by the creator
	 */
	title?: string;

	topic_ids?: Array<string>;

	/**
	 * Specifies the date and time of the last update to any of the Space's metadata, such as its title or scheduled time
	 */
	updated_at?: string;

	/**
	 * The id of the user who created this space
	 */
	creator_id?: Snowflake;
}
