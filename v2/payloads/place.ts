/**
 * https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/place
 */
export interface APIPlace {
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
  contained_within?: Array<string>;

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
  geo?: APIPlaceGeo;

  /**
   * The short name of this place
   */
  name?: string;

  /**
   * The particular type of information represented by this place information,
   * such as a city name, or a point of interest
   */
  place_type?: APIPlaceType;
}

export interface APIPlaceGeo {
  type: string; // TODO can be narrowed down to only supported `Feature` literal
  bbox: APIPlaceGeoBoundingBox;
  properties: Record<string, unknown>; // TODO the shape of the object is not documented
}

export type APIPlaceGeoBoundingBox = [number, number, number, number];

export type APIPlaceType = 'poi' | 'neighborhood' | 'city' | 'admin' | 'country' | 'unknown';
