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
  errors: Array<APIInvalidRequestProblemErrors>;
}

export interface APIInvalidRequestProblemErrors {
  parameters: APIInvalidRequestProblemErrorsParameters;
  message: string;
}

export interface APIInvalidRequestProblemErrorsParameters {
  id: Array<string>;
}
