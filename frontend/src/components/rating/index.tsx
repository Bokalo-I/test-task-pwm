import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import type { RatingProps } from './types';
import Icon from '../icon';
import fonts from '@/theme/fonts';

const Rating: FC<RatingProps> = ({ rating, withNumber = true, withEmpty = false, wrapperProps = {} }) => {
  return (
    <Flex alignItems='center' gap='5px' {...wrapperProps}>
      <Flex>
        {Array.from({ length: withEmpty ? 5 : rating }).map((_, index) => (
          <Icon key={index} iconName='material-symbols:star' color='orange.400' />
        ))}
      </Flex>
      {withNumber && (
        <Text fontFamily={fonts.inter} fontWeight={400} fontSize='14px' color='gray.600'>
          {rating}
        </Text>
      )}
    </Flex>
  );
};

export default Rating;
