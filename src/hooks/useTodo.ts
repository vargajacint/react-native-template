import { useCallback, useMemo } from 'react';

/* Types */
import type { ICreateTodoRequestDTO, ICreateTodoResponseDTO, ITodoDTO } from '../typings/DTOs';
import type { BareFetcher, PublicConfiguration } from 'swr/_internal';
import type { ITodo } from '../typings';

/* Data Things */
import { useAPI } from './useAPI';
import useSWR from 'swr';

const transformITodoDTO = (p: ITodoDTO): ITodo => {
  return {
    completed: p.completed,
    computedField: `${p.id} - ${p.title}`,
    id: p.id,
    title: p.title,
    userId: p.userId,
  };
};

export const useTodos = (config?: Partial<PublicConfiguration<ITodoDTO[], any, BareFetcher<ITodoDTO[]>>>) => {
  /* Hooks */
  const { API } = useAPI();
  const {
    data,
    error,
    mutate: setTodos,
    isLoading,
  } = useSWR<ITodoDTO[]>('https://jsonplaceholder.typicode.com/todos', config);

  /* Variables */
  const todos = useMemo(() => (data ? data.map(todo => transformITodoDTO(todo)) : null), [data]);

  const create = useCallback(
    async (body: ICreateTodoRequestDTO) => {
      try {
        const response = await API<ICreateTodoResponseDTO, ICreateTodoRequestDTO>({
          path: 'https://jsonplaceholder.typicode.com/todos',
          method: 'POST',
          body,
        });

        if (response.message) {
          throw new Error(response.message);
        } else {
          return Promise.resolve('');
        }
      } catch (error) {
        const { message } = error as Error;
        return Promise.reject(String(message || error));
      }
    },
    [API],
  );

  const get = useCallback(
    async (id: number): Promise<ITodo | string> => {
      try {
        const response = await API<ITodoDTO, any>({
          path: `https://jsonplaceholder.typicode.com/todos/${id}`,
          method: 'GET',
        });

        if (response.message) {
          throw new Error(response.message);
        } else {
          return Promise.resolve(transformITodoDTO(response));
        }
      } catch (error) {
        const { message } = error as Error;
        return Promise.reject(String(message || error));
      }
    },
    [API],
  );

  return {
    isLoading,
    todos,
    error,
    create,
    get,
    setTodos,
  };
};
