import { FC } from 'react';
import { Icon as ChakraIcon } from '@chakra-ui/react';
import { Icon as IconifyIcon } from '@iconify/react';

import type { IconProps } from './types';

const Icon: FC<IconProps> = ({ iconName, ...iconProps }) => {
  return <ChakraIcon as={IconifyIcon} icon={iconName} {...iconProps} />;
};

export default Icon;
