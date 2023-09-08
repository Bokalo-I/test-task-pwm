import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Button, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import CountBadge from '../count-badge';
import Icon from '../icon';
import type { HeaderProps } from './types';
import UserLogo from '@/assets/user-logo.svg';
import HeaderLogo from '@/assets/header-logo.svg';

const Header: FC<HeaderProps> = ({ watchCount, refetch }) => {
  const { register, setValue } = useFormContext();

  const handleClear = () => {
    setValue('search', '');
    refetch();
  };

  return (
    <Flex
      as='header'
      maxH='88px'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      gap='30px'
      mb='28px'
    >
      <Flex direction='row' w='100%' alignItems='center'>
        <Link to='/'>
          <HeaderLogo />
        </Link>
        <InputGroup w='fit-content'>
          <InputLeftAddon pl='15px' pr='2px'>
            <Icon iconName='material-symbols:search' color='gray.500' w='20px' h='20px' />
          </InputLeftAddon>
          <Input placeholder='Search...' bg='gray.100' minW='650px' maxW='650px' {...register('search')} />
          <InputRightAddon pr='15px' onClick={handleClear} cursor='pointer'>
            <Icon iconName='material-symbols:close' color='blue.500' w='20px' h='20px' />
          </InputRightAddon>
        </InputGroup>
        <Button variant='outline' fontWeight={700} type='submit' ml='30px'>
          Search
        </Button>
      </Flex>
      <Flex direction='row' gap='26px' alignItems='center'>
        <Button as={Link} to='/watch-list' variant='outline' fontWeight={700} position='relative'>
          Watch
          {!!watchCount && <CountBadge count={watchCount} />}
        </Button>
        <UserLogo />
      </Flex>
    </Flex>
  );
};

export default Header;
