import { FC, useEffect, useState } from 'react';
import { Alert, AlertIcon, AlertTitle, Collapse } from '@chakra-ui/react';

import type { ErrorAlertProps } from './types';

const ErrorAlert: FC<ErrorAlertProps> = ({ error, setError }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let hideTimeoutId: NodeJS.Timeout | null = null;

    if (error) {
      setIsOpen(true);

      hideTimeoutId = setTimeout(() => {
        setError(null);
        setIsOpen(false);
      }, 3000);
    } else setIsOpen(false);

    return () => {
      hideTimeoutId && clearTimeout(hideTimeoutId);
    };
  }, [error, setError]);

  return (
    <Collapse in={isOpen} animateOpacity style={{ position: 'absolute', top: '20px', left: '15px' }}>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{error}</AlertTitle>
      </Alert>
    </Collapse>
  );
};

export default ErrorAlert;
