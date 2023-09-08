import { ProductType } from '@/common/types';

export type ProductProps = ProductType & {
  refetch: () => void;
};
