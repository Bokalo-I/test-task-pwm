import { ChangeEvent } from 'react';
import { Button, Flex, Grid, Input, Select, Text } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import Header from '@/components/header';
import Icon from '@/components/icon';
import Product from '@/components/product';
import RangePicker from '@/components/range-picker';
import { useFetch } from '@/hooks/use-fetch';
import type { ProductType } from '@/common/types';

const sortOptions = {
  'The cheapest': { sortOrder: 'ASC', sortBy: 'price' },
  'The most expensive': { sortOrder: 'DESC', sortBy: 'price' },
  'Top rated': { sortOrder: 'DESC', sortBy: 'rating' },
};

const Home = () => {
  const form = useForm({});
  const { data: products, refetch: refetchProducts } = useFetch<ProductType[]>({
    path: 'product/all',
    defaultValue: [],
  });
  const {
    data: { count: watchCount },
    refetch: refetchWatchingCount,
  } = useFetch<{ count: number }>({ path: 'product/watching/count', defaultValue: 0 });

  const handleRefetch = () => {
    form.handleSubmit(handleSubmit)();
    refetchWatchingCount();
  };

  const handleSubmit = (values: any) => refetchProducts({ query: values });
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const optionLabel = e.target.value as keyof typeof sortOptions;
    const option = sortOptions[optionLabel];

    if (!option) return;
    form.setValue('sortOrder', option.sortOrder);
    form.setValue('sortBy', option.sortBy);
    form.handleSubmit(handleSubmit)();
  };
  const handlePriceChange = ([from, to]: [number, number]) => {
    form.setValue('priceFrom', from);
    form.setValue('priceTo', to);
  };
  const handleRatingChange = ([from, to]: [number, number]) => {
    form.setValue('ratingFrom', from);
    form.setValue('ratingTo', to);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Header watchCount={watchCount} refetch={handleRefetch} />
        <Flex direction='row' gap='26px'>
          <Flex flexDirection='column' gap='10px' minW='300px' maxW='300px'>
            <Input placeholder='Title' borderBottomWidth='1px !important' {...form.register('title')} />
            <Input placeholder='Description' borderBottomWidth='1px !important' {...form.register('description')} />
            <RangePicker unit='$' min={0} max={1000} defaultMin={0} defaultMax={100} onChange={handlePriceChange} />
            <Text>Rating:</Text>
            <RangePicker min={1} max={5} defaultMin={1} defaultMax={5} onChange={handleRatingChange} />
            <Button mt='10px' variant='outline' type='submit'>
              Apply
            </Button>
          </Flex>
          <Flex
            flexDirection='column'
            gap='30px'
            boxShadow='0px 1px 2px 0px #3A3A443D'
            mb='50px'
            flex={1}
            borderRadius='4px'
            p='16px'
          >
            <Flex alignSelf='flex-start'>
              <Select
                variant='outline'
                iconColor='gray.500'
                iconSize='15px'
                icon={<Icon iconName='ion:caret-down-sharp' />}
                onChange={handleSortChange}
              >
                {Object.keys(sortOptions).map((label) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </Select>
            </Flex>
            <Grid templateColumns='repeat(3, 1fr)'>
              {products.map((product) => (
                <Product key={product.id} refetch={handleRefetch} {...product} />
              ))}
            </Grid>
          </Flex>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default Home;
