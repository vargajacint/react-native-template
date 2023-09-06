import { useCallback } from 'react';

/* Types */
import type { IAPIRejection, IAPIRequest } from '../typings';

/* Data Things */
import { api } from '../utils';

const sleepFor = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useAPI = () => {
  /* 
      In here, you have the opportunity to craft a versatile API request handler, 
      encompassing functionalities such as token refreshing, appending the access token to the request, 
      and presenting informative messages, such as toast notifications. For a more 
      detailed reference on this subject, please refer to the following link: 
      https://github.com/DakaiGroup/tiltt-customer-application/blob/a33e6d873957d9f8184c6d5f081eb0be0e5c5d61/src/hooks/useAPI.ts#L16C1-L16C1
    */

  const apicall = useCallback(async <T, Body = unknown>({ sleep, ...apiRequest }: Omit<IAPIRequest<Body>, 'token'>) => {
    try {
      if (sleep) {
        await sleepFor(sleep);
      }

      return await api<T, Body>(apiRequest);
    } catch (error) {
      return Promise.reject(error as IAPIRejection);
    }
  }, []);

  return { API: apicall };
};
