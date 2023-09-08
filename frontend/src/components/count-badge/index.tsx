import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import type { CountBadgeProps } from './types';

const CountBadge: FC<CountBadgeProps> = ({ count, wrapperProps = {} }) => {
  return (
    <Flex
      position='absolute'
      bg='red.500'
      textColor='white'
      w='20px'
      h='20px'
      fontSize='14px'
      borderRadius='50%'
      justifyContent='center'
      alignItems='center'
      right='-10px'
      top='-10px'
      {...wrapperProps}
    >
      {count}
    </Flex>
  );
};

export default CountBadge;
