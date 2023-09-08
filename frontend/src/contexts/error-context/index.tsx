import { FC, PropsWithChildren, createContext, useState } from 'react';
import type { Error, ErrorContextProps } from './types';

export const ErrorContext = createContext<ErrorContextProps>({ error: null, setError: () => {} });

const ErrorContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [error, setError] = useState<Error>(null);

  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};

export default ErrorContextProvider;
