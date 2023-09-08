import { useContext, useEffect, useState } from 'react';

import { UseFetchHookParams } from '@/common/types';
import { ErrorContext } from '@/contexts/error-context';

export const useFetch = <T>({ path = '', query: rootQuery = {}, deps = [], defaultValue = {} }: UseFetchHookParams) => {
  const { setError: setContextError } = useContext(ErrorContext);
  const [data, setData] = useState<T>(defaultValue);
  const [error, setError] = useState<string | string[] | null>(null);

  const refetch = async ({ query }: Pick<UseFetchHookParams, 'query'> = { query: rootQuery }) => {
    const searchParams = new URLSearchParams(query as Record<string, string>);

    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}?${searchParams}`);
    const data = await response.json();

    if (!response.ok) {
      setContextError(data.message);
      setError(data.message);
      return;
    }

    setData(data);
  };

  useEffect(() => {
    refetch({ query: rootQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(rootQuery), ...deps]);

  return { data, error, refetch };
};
