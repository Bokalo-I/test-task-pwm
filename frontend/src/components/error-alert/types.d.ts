import { Error } from '@/contexts/error-context/types';

export type ErrorAlertProps = {
  error: Error;
  setError: (error: Error) => void;
};
