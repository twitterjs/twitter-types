export interface ProblemFields {
  title: string;
  detail: string;
}

/**
 * A generic problem with no additional information beyond that provided by the HTTP status code
 */
export interface GenericProblem extends ProblemFields {
  type: string;
  status: number;
}

/**
 * A problem that indicates the request is invalid
 */
export interface InvalidRequestProblem extends ProblemFields {
  type: string;
  errors: Array<InvalidRequestProblemErrors>;
}

export interface InvalidRequestProblemErrors {
  parameters: { additionalProperties: Array<string> }; // TODO
  message: string;
}
