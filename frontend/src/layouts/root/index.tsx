import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import type { RootLayoutProps } from './types';

const RootLayout: FC<RootLayoutProps> = ({ wrapperProps = {} }) => {
  return (
    <Box maxW='1382px' m='0 auto' {...wrapperProps}>
      <Outlet />
    </Box>
  );
};

export default RootLayout;
