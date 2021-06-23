/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/place
 */
export interface APIPlaceObject {
  /**
   * A longer-form detailed name of this place
   */
  full_name: string;

  /**
   * The unique identifier of the expanded place, if this is a point of interest tagged in the Tweet
   */
  id: string;

  /**
   * The identifiers of known places that contain this place
   */
  contained_within?: Array<any>;

  /**
   * The full-length name of the country this place belongs to
   */
  country?: string;

  /**
   * The `ISO Alpha-2` country code this place belongs to
   */
  country_code?: string;

  /**
   * Contains details about the place in `GeoJSON` format
   */
  geo?: any; // TODO

  /**
   * The short name of this place
   */
  name?: string;

  /**
   * The particular type of information represented by this place information,
   * such as a city name, or a point of interest
   */
  place_type?: string; // TODO this can be narrowed down to city/<something>??
}
