import { PropsWithChildren, useMemo } from 'react';

/* Types */
import type { Cache } from 'swr';

/* Data Things */
import { MMKVStorageProvider } from '../../utils';
import { SWRConfig } from 'swr';
import { useAPI } from '../../hooks';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const SWRProvider = (props: PropsWithChildren) => {
  /* Hooks */
  const { API } = useAPI();

  /* Clear the storage in here if the user is logged out */

  const config = useMemo(() => {
    return {
      provider: (cache: Readonly<Cache>) => MMKVStorageProvider(storage, cache),
      fetcher: (url: string) => API({ method: 'GET', path: url }),
    };
  }, [API]);

  return <SWRConfig value={config}>{props.children}</SWRConfig>;
};
