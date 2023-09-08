import { DependencyList } from 'react';

export type ProductType = {
  id: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  isInWatchList?: boolean;
};

export type UseFetchHookParams = {
  path: string;
  defaultValue?: any;
  query?: Record<string, string | number | boolean>;
  deps?: DependencyList;
};
