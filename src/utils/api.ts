import { IAPIRejection, IAPIRequest } from '../typings';
import { API_BASE } from '@env';

const getErrorMessage = (statusCode: number) => {
  switch (statusCode) {
    case 401:
      return 'Something went wrong, please try again later!';

    case 403:
      return 'Something went wrong, you do not have permission to perform this action!';

    default:
      return 'Something went wrong, please try again later!';
  }
};

export const api = async <T, Body>({ method, path, body, token }: IAPIRequest<Body>): Promise<T & IAPIRejection> => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  });

  try {
    const response = await fetch(`${API_BASE}/${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    console.log(response.status, `${API_BASE}/${path}`, body ? JSON.stringify(body) : undefined);

    if (response.status < 400 && response.ok) {
      const parsed = await response.json();

      if (Array.isArray(parsed)) {
        return parsed as T & IAPIRejection; // TODO figure out something better instead of this
      } else {
        return { ...parsed, code: response.status };
      }
    } else {
      const parsed = JSON.parse(await response.text());
      throw {
        message: parsed?.message ?? getErrorMessage(response.status),
        code: response.status,
        additionalInfo: parsed?.additionalInfo,
      };
    }
  } catch (error) {
    throw error;
  }
};
