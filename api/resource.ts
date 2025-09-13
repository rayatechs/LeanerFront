export interface IRequest<T> {
  data: T;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IValidationError<T> {
  message: string;
  errors: Map<string, T[]>;
}
