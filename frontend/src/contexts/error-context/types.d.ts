export type Error = string | string[] | number | number[] | null | undefined;
export type ErrorContextProps = {
  error: Error;
  setError: (error: Error) => void;
};
