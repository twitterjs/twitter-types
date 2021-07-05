export interface APIProblemFields {
  title: string;
  detail: string;
}

/**
 * A generic problem with no additional information beyond that provided by the HTTP status code
 */
export interface APIGenericProblem extends APIProblemFields {
  type: string;
  status: number;
}

/**
 * A problem that indicates the request is invalid
 */
export interface APIInvalidRequestProblem extends APIProblemFields {
  type: string;
  title: 'Invalid Request';
  errors: Array<APIInvalidRequestProblemErrors>;
}

export interface APIInvalidRequestProblemErrors {
  parameters: APIInvalidRequestProblemErrorsParameters;
  message: string;
}

export interface APIInvalidRequestProblemErrorsParameters {
  id: Array<string>;
}

/**
 * A problem that indicates that a given Tweet, User, etc. does not exist
 */
export interface APIResourceNotFoundProblem extends APIProblemFields {
  type: string;
  parameter: string;
  value: any; // TODO
  resource_id: string;
  resource_type: string;
}

/**
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc
 */
export interface APIResourceUnauthorizedProblem extends APIProblemFields {
  type: string;
  value: string;
  parameter: string;
  section: string;
  resource_id: string;
  resource_type: string;
}

/**
 * A problem that indicates a particular Tweet, User, etc. is not available to you
 */
export interface APIResourceUnavailableProblem extends APIProblemFields {
  type: string;
  parameter: string;
  resource_id: string;
  resource_type: string;
}

/**
 * A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc
 */
export interface APIFieldUnauthorizedProblem extends APIProblemFields {
  type: string;
  section: string;
  resource_type: string;
  field: string;
}

/**
 * A problem that indicates your client is forbidden from making this request
 */
export interface APIClientForbiddenProblem extends APIProblemFields {
  type: string;
  reason: string;
  registration_url: string;
}

/**
 * A problem that indicates that the resource requested violates the precepts of this API
 */
export interface APIDisallowedResourceProblem extends APIProblemFields {
  type: string;
  resource_id: string;
  resource_type: string;
  section: string;
}

/**
 * A problem that indicates that the authentication used is not supported
 */
export interface APIUnsupportedAuthenticationProblem extends APIProblemFields {
  type: string;
}

/**
 * A problem that indicates that a usage cap has been exceeded
 */
export interface APIUsageCapExceededProblem extends APIProblemFields {
  type: string;
  period: string;
  scope: string;
}

/**
 * A problem that indicates something is wrong with the connection
 */
export interface APIConnectionExceptionProblem extends APIProblemFields {
  type: string;
  connection_issue: string;
}

/**
 * Your client has gone away
 */
export interface APIClientDisconnectedProblem extends APIProblemFields {
  type: string;
}

/**
 * You have been disconnected for operational reasons
 */
export interface APIOperationalDisconnectProblem extends APIProblemFields {
  type: string;
  disconnect_type: string;
}

/**
 * You have exceeded the maximum number of rules
 */
export interface APIRulesCapProblem extends APIProblemFields {
  type: string;
}

/**
 * The rule you have submitted is invalid
 */
export interface APIInvalidRuleProblem extends APIProblemFields {
  type: string;
}

/**
 * The rule you have submitted is a duplicate
 */
export interface APIDuplicateRuleProblem extends APIProblemFields {
  type: string;
}

/**
 * An HTTP Problem Details object, as defined in [IETF RFC 7807](https://tools.ietf.org/html/rfc7807)
 */
export type APIProblem =
  | APIGenericProblem
  | APIInvalidRequestProblem
  | APIClientForbiddenProblem
  | APIResourceNotFoundProblem
  | APIResourceUnavailableProblem
  | APIResourceUnauthorizedProblem
  | APIFieldUnauthorizedProblem
  | APIDisallowedResourceProblem
  | APIUnsupportedAuthenticationProblem
  | APIUsageCapExceededProblem
  | APIConnectionExceptionProblem
  | APIClientDisconnectedProblem
  | APIOperationalDisconnectProblem
  | APIRulesCapProblem
  | APIInvalidRuleProblem
  | APIDuplicateRuleProblem;
