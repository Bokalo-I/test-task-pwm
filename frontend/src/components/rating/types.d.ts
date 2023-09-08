import { FlexProps } from '@chakra-ui/react';

export type RatingProps = {
  rating: number;
  withEmpty?: boolean;
  withNumber?: boolean;
  wrapperProps?: FlexProps;
};
