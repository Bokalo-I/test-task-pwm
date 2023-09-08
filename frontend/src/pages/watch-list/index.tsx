import { Flex, Grid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Icon from '@/components/icon';
import Product from '@/components/product';
import fonts from '@/theme/fonts';
import { useFetch } from '@/hooks/use-fetch';
import { ProductType } from '@/common/types';

const WatchList = () => {
  const { data: products, refetch } = useFetch<ProductType[]>({
    path: 'product/all',
    defaultValue: [],
    query: { onlyWatchList: 'true' },
  });

  return (
    <Flex direction='column' pt='20px'>
      <Text as={Link} to='/' fontFamily={fonts.inter} alignItems='center' display='flex'>
        <Icon iconName='ep:back' mr='3px' />
        Go to Home
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' pt='15px'>
        {products.map((product) => (
          <Product key={product.id} refetch={refetch} {...product} />
        ))}
      </Grid>
    </Flex>
  );
};

export default WatchList;
