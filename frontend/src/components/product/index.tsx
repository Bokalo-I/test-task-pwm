import { FC } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import fonts from '@/theme/fonts';
import Icon from '../icon';
import Rating from '../rating';
import { ProductProps } from './types';

const Product: FC<ProductProps> = ({
  id,
  image,
  title,
  price,
  description,
  rating,
  isInWatchList = false,
  refetch,
}) => {
  const handleWatch = async () => {
    if (isInWatchList) {
      await fetch(`${import.meta.env.VITE_API_URL}product/${id}/watching/remove`, { method: 'DELETE' });
    } else {
      await fetch(`${import.meta.env.VITE_API_URL}product/${id}/watching/add`, { method: 'POST' });
    }
    refetch();
  };

  return (
    <Box
      p='16px'
      borderRadius='4px'
      cursor='pointer'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      gap='10px'
      minH='475px'
      maxH='475px'
      minW='300px'
      maxW='300px'
      transition='box-shadow, 0.3s'
      _hover={{
        boxShadow: '0px 4px 8px 0px #5C6BC033; 0px 2px 4px 0px #3B457B33',
      }}
    >
      <Flex flexDirection='column'>
        <Box as='img' src={image} minW='100%' minH='100%' maxH='224px' alt={title} />
        <Text color='black' fontFamily={fonts.inter} fontWeight={400} mt='5px'>
          {title}
        </Text>
        <Text color='black' fontFamily={fonts.inter} fontSize='24px' fontWeight={700}>
          ${price}
        </Text>
        <Text fontSize='14px' fontFamily={fonts.inter} fontWeight={400} color='gray.500'>
          {description}
        </Text>
      </Flex>
      <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Rating rating={rating} />
        <Button variant='outline' onClick={handleWatch}>
          <Icon iconName='mdi:heart-outline' color='blue.500' mr='5px' />
          {isInWatchList ? 'Remove' : 'Watch'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Product;
