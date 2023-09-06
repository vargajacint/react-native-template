export interface IAPIRejection {
  message: string;
  code: number;
  // Match this with your backend configuration
  additionalInfo?: Partial<{
    errorCode?: string; // Custom error code, for example: 'TOKEN_EXPIRED'
  }>;
}

export interface IAPIRequest<Body> {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  body?: Body;
  token?: string;
  sleep?: number;
}
